import type { Metadata } from 'next';
import { Providers } from "./provider";
import './globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Navbar';
import FloatingButton from '@/components/FloatingButton';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
export const metadata: Metadata = {
  title: 'IQU Clinic',
  description: 'Therapy & Counseling Center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-lora'>
        <Providers>
        <Header />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <FloatingButton />
        <Footer />
        </Providers>

      </body>
    </html>
  )
}
