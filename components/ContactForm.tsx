'use client';

import { useActionState, useEffect, useRef } from 'react';
import { sendContactMessage, type ContactState } from '@/app/actions/contact';

const initialState: ContactState = { status: 'idle', message: '' };

const inputClass =
  'border-line bg-surface placeholder:text-muted w-full rounded-xl border px-4 py-3 focus-visible:outline-2';

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') form.current?.reset();
  }, [state]);

  return (
    <form ref={form} action={formAction} className="space-y-4">
      <div>
        <label htmlFor="message" className="mb-1 block text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          aria-invalid={!!state.fieldErrors?.message}
          aria-describedby={state.fieldErrors?.message ? 'message-error' : undefined}
          className={inputClass}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={!!state.fieldErrors?.email}
          aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined}
          className={inputClass}
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500">
            {state.fieldErrors.email[0]}
          </p>
        )}
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="bg-accent text-accent-fg font-display rounded-full px-6 py-2 text-lg disabled:opacity-60"
        >
          {pending ? 'sending…' : 'send'}
        </button>
        <p aria-live="polite" className={state.status === 'error' ? 'text-red-500' : ''}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
