import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kumkum Vastr - Premium Indian Ethnic Wear',
  description:
    'Discover the finest collection of authentic Indian ethnic wear. Shop sarees, salwar kameez, lehengas, and more at Kumkum Vastr.',
  keywords: [
    'Indian ethnic wear',
    'sarees',
    'salwar kameez',
    'lehenga',
    'traditional Indian clothing',
    'ethnic fashion',
  ],
  authors: [{ name: 'Kumkum Vastr' }],
  openGraph: {
    title: 'Kumkum Vastr - Premium Indian Ethnic Wear',
    description: 'Discover the finest collection of authentic Indian ethnic wear',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#333',
              border: '1px solid #FF9933',
            },
            success: {
              iconTheme: {
                primary: '#138808',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#dc2626',
                secondary: '#fff',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
