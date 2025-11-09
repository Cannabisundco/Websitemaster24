'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">Websitemaster24</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#preise" className="text-gray-700 hover:text-primary-600 transition">
              Preise
            </Link>
            <Link href="#demos" className="text-gray-700 hover:text-primary-600 transition">
              Demos
            </Link>
            <Link href="#rechner" className="text-gray-700 hover:text-primary-600 transition">
              Preisrechner
            </Link>
            <Link 
              href="#kontakt" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Kontakt
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link href="#preise" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Preise
            </Link>
            <Link href="#demos" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Demos
            </Link>
            <Link href="#rechner" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Preisrechner
            </Link>
            <Link href="#kontakt" className="block px-3 py-2 bg-primary-600 text-white rounded">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

