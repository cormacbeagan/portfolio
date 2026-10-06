'use server';

import { Resend } from 'resend';
import { z } from 'zod';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  fieldErrors?: Partial<Record<'email' | 'message', string[]>>;
  /** Submitted values, echoed back so React's post-action form reset doesn't wipe them on error. */
  fields?: { email: string; message: string };
};

const schema = z.object({
  email: z.email('Please enter a valid email address.').max(254),
  message: z
    .string()
    .trim()
    .min(10, 'Your message is a little short.')
    .max(5000, 'Please keep your message under 5000 characters.'),
});

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get('company')) {
    return { status: 'success', message: 'Message sent. Thank you!' };
  }

  const fields = {
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  };
  const parsed = schema.safeParse(fields);

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Please check the form and try again.',
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      fields,
    };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Contact form is missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL');
    return {
      status: 'error',
      message: 'The contact form is unavailable right now. Please email me directly.',
      fields,
    };
  }

  const { email, message } = parsed.data;
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `New message from macbeagan.me (${email})`,
    // Plain text only, so visitor input can never inject HTML.
    text: `${message}\n\nFrom: ${email}`,
  });

  if (error) {
    console.error('Resend error', error);
    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please try again or email me directly.',
      fields,
    };
  }

  return { status: 'success', message: 'Message sent. Thank you!' };
}
