'use client'

import { useState, useEffect, useCallback } from 'react'
import CountryCard from './CountryCard'

interface Country {
  name: {
    common: string
    official: string
  }
  flags: {
    png: string
    alt: string
  }
  capital: string[]
  population: number
  region: string
}

interface CountryListProps {
  searchTerm: string
  continent?: string  // Add continent prop
}

export default function CountryList({ searchTerm, continent }: CountryListProps) {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(15)

  const fetchCountries = useCallback(async () => {
    try {
      // Use continent-specific endpoint if continent is provided
      const url = continent
        ? `https://restcountries.com/v3.1/region/${continent}`
        : 'https://restcountries.com/v3.1/all'
      
      const res = await fetch(url)
      const data = await res.json()
      const sortedData = data.sort((a: Country, b: Country) => 
        a.name.common.localeCompare(b.name.common)
      )
      setCountries(sortedData)
    } catch (error) {
      console.error('Error fetching countries:', error)
    } finally {
      setLoading(false)
    }
  }, [continent])  // Add continent to dependencies

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  const filteredCountries = countries.filter(country => {
    try {
      if (!country?.name?.common) return false;
      return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    } catch (error) {
      console.error('Error filtering country:', error);
      return false;
    }
  });

  const visibleCountries = filteredCountries.slice(0, visibleCount)
  const hasMore = visibleCountries.length < filteredCountries.length

  if (loading) return <div className="text-center p-8">Loading...</div>

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {visibleCountries.map(country => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
      
      {filteredCountries.length === 0 && (
        <div className="text-center text-gray-500">
          No countries found matching your search.
        </div>
      )}

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount(prev => prev + 15)}
            className="px-6 py-2 rounded-b-xs border border-smoke bg-smoke text-black cursor-pointer transition-all hover:bg-deepBlue hover:text-smoke duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}