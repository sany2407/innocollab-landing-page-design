import type {Metadata} from 'next';
import { Bebas_Neue, Space_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'INNOCOLLAB | STRATEGIC INNOVATION VANGUARD',
  description: 'Strategic Innovation Vanguard - High-Performance Engineering for Enterprise',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
