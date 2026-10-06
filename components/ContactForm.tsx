'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactState } from '@/app/actions/contact';

const initialState: ContactState = { status: 'idle', message: '' };

const inputClass =
  'border-line bg-surface placeholder:text-muted/70 w-full rounded-lg border px-4 py-3 transition-colors focus-visible:border-accent focus-visible:outline-none aria-invalid:border-red-500';

export function ContactForm() {
  // React resets the form after each action; defaultValue restores input on error.
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="message" className="text-muted mb-1.5 block font-mono text-xs">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          defaultValue={state.fields?.message}
          placeholder="Hi Mac, I'd like to talk about…"
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
        <label htmlFor="email" className="text-muted mb-1.5 block font-mono text-xs">
          your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state.fields?.email}
          placeholder="you@example.com"
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

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="bg-accent text-accent-fg rounded-lg px-5 py-2.5 font-mono text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? 'sending…' : 'send message →'}
        </button>
        <p
          aria-live="polite"
          className={`text-sm ${state.status === 'error' ? 'text-red-500' : 'text-accent'}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
