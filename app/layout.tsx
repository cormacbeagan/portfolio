import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { profile, THEME_STORAGE_KEY, themes } from '@/content/site';
import './globals.css';

const kanit = localFont({
  src: './fonts/Kanit-Medium.woff2',
  weight: '500',
  variable: '--font-kanit',
  display: 'swap',
});

const abril = localFont({
  src: './fonts/AbrilFatface-Regular.woff2',
  weight: '400',
  variable: '--font-abril',
  display: 'swap',
});

const description = `Portfolio of ${profile.name}, a ${profile.location} based senior software engineer building React and React Native apps for healthcare.`;

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
    { media: '(prefers-color-scheme: light)', color: '#f6f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#161514' },
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
      className={`${kanit.variable} ${abril.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
