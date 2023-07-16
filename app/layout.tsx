import './globals.css'
import { Inter } from 'next/font/google'
import Narvbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SiFood Srikandi',
  description: 'Dashboard SiFood',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full bg-gray-100'>
      <body className={`h-full ${inter.className}`}>
        <div className="min-h-full">
          <Narvbar />
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

              {/* content */}
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
