import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import { Mulish } from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});

export const metadata = {
  title: 'NextJs Netflix Website',
  description: 'Getting an Hands-on experience on NextJS and React with MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
