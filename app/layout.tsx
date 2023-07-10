import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uni things',
  description: 'Uni things (https://doulovera.com)',
}

const MetaLinks = [
  {
    icon: '🛖',
    href: '/',
    title: 'home',
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-4/12 min-h-screen mx-auto px-6 py-3 bg-zinc-100">
          <header className="pb-4 border-b-2">
            {
              MetaLinks.map(({ href, icon, title }) => (
                <Link href={href} className="px-4 border-r-2" key={title}>{icon}</Link>
              ))
            }
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
