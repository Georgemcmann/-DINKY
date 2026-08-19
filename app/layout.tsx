import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

// Self-hosted via next/font: no external font request at runtime, no layout shift.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '$DINKY — Small Duck. Big Energy.',
  description:
    "Dinky blew up on TikTok being exactly, unapologetically himself. Now he's on-chain. Sunglasses on, chain out, straight to the moon.",
  openGraph: {
    title: '$DINKY — Small Duck. Big Energy.',
    description:
      "Dinky blew up on TikTok being exactly, unapologetically himself. Now he's on-chain.",
    images: ['/Dinky.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0b0c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
