import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAHJONY Energy Reseller OS',
  description: 'Autonomous governed commercial energy reseller operating system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
