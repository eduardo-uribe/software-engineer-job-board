import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'software resume',
  description: 'Remote software engineer jbos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className='h-full w-full bg-white' lang='en'>
        <body className={'h-full w-full' + inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
