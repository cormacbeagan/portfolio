import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { profile, THEME_STORAGE_KEY, themes } from '@/content/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const description = `Portfolio of ${profile.name}, a ${profile.location} based freelance web developer.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} | ${profile.role}`,
  description,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description,
    url: profile.url,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0d' },
  ],
};

// Runs before first paint so the theme never flashes. Uses the saved choice,
// otherwise the OS preference. Older versions of the site stored the value
// JSON-encoded (e.g. "\"dark\""), hence the replace; retired themes fall back.
const themeScript = `(function(){try{var t=(localStorage.getItem('${THEME_STORAGE_KEY}')||'').replace(/"/g,'');if(${JSON.stringify(themes)}.indexOf(t)<0)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en-GB"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
