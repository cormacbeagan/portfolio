'use client';

import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access denied; the mailto link is still available.
    }
  }

  return (
    <button type="button" onClick={copy} className="inline-flex items-center gap-2 hover:underline">
      <FaCopy aria-hidden="true" />
      <span aria-live="polite">{copied ? 'copied!' : 'copy email'}</span>
    </button>
  );
}
