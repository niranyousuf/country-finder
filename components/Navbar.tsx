'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-darkBlue text-white sticky top-0 z-9999">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Country
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/countries" 
              className={`hover:text-blue-200 ${mounted && pathname === '/countries' ? 'text-blue-200' : ''}`}
            >
              All Countries
            </Link>
            <Link 
              href="/" 
              className={`hover:text-blue-200 ${mounted && pathname === '/' ? 'text-blue-200' : ''}`}
            >
              Continents
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-blue-200 ${mounted && pathname === '/about' ? 'text-blue-200' : ''}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}