'use client'

import { useState, useEffect } from 'react'
import CountryList from '@/components/CountryList'

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">All Countries</h1>
        
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search countries..."
            className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <CountryList searchTerm={searchTerm} />
      </div>
    </div>
  )
}