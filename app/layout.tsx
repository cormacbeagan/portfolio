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

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} | ${profile.role}`,
  description: `Portfolio of ${profile.name}, a Munich based freelance web developer.`,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: `Portfolio of ${profile.name}, a Munich based freelance web developer.`,
    url: profile.url,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f6f6',
};

// Runs before first paint so the saved theme never flashes. Older versions of
// the site stored the value JSON-encoded (e.g. "\"dark\""), hence the replace.
const themeScript = `(function(){try{var t=(localStorage.getItem('${THEME_STORAGE_KEY}')||'').replace(/"/g,'');if(${JSON.stringify(themes)}.indexOf(t)>-1)document.documentElement.dataset.theme=t;}catch(e){}})();`;

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
