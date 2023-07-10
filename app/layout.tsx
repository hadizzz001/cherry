
import { Navbar2, Footer } from '@/components'  
import './globals.css' 
import { useSearchParams } from 'next/navigation'
import ContextWrapper from './context/store';

 

export const metadata = {
  title: 'Cherry Agency',
  description: 'Discover the best layouts in the world',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) { 
 

  return (
    <html lang='en'>
      <body className="relative"> 
      <ContextWrapper>
        <Navbar2/>
        {children}
        <Footer/>
        </ContextWrapper>
       
        </body>
    </html>
  )
}
