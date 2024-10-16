import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomNavbar from '@/components/navBarComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REV Contractors',
  description: 'Your trusted contractor service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rev.png" type="image/png" />
        <meta name="description" content="REV Contractors" />
        <title>REV Contractors</title>
      </head>
      <body className={inter.className}>
          <CustomNavbar />
          <main>{children}</main>
      </body>
    </html>
  );
}
