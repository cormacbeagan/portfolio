'use client';

import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

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
    <button
      type="button"
      onClick={copy}
      className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm transition-colors"
    >
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email address'}</span>
    </button>
  );
}
