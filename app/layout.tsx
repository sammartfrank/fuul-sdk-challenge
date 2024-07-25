import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

import { cn } from '@/lib/utils';
import NavBar from '@/components/Navbar';
import { Providers } from '@/components/providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
