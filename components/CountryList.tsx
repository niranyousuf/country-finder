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
  subregion?: string
}

interface CountryListProps {
  searchTerm: string
  continent?: string  // Add continent prop
}

export default function CountryList({ searchTerm, continent }: CountryListProps) {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(9)

  const fetchCountries = useCallback(async () => {
    try {
      let url: string
      
      if (continent) {
        // Map URL continent names to API region names
        const regionMap: { [key: string]: string } = {
          'africa': 'Africa',
          'asia': 'Asia', 
          'europe': 'Europe',
          'north-america': 'Americas',
          'south-america': 'Americas',
          'oceania': 'Oceania'
        }
        
        const apiRegion = regionMap[continent.toLowerCase()]
        
        if (!apiRegion) {
          console.error(`Unknown continent: ${continent}`)
          setCountries([])
          setLoading(false)
          return
        }
        
        url = `https://restcountries.com/v3.1/region/${apiRegion}?fields=name,flags,capital,population,region,subregion,area,latlng,cca3`
      } else {
        url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,area,latlng,cca3'
      }
      
      const res = await fetch(url)
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} for URL: ${url}`)
      }
      
      const data = await res.json()
      
      // Check if data is an array before sorting
      if (Array.isArray(data)) {
        let filteredData = data
        
        // For Americas region, filter by subregion if needed
        if (continent && continent.toLowerCase() === 'north-america') {
          filteredData = data.filter((country: Country) => 
            country.subregion === 'North America'
          )
        } else if (continent && continent.toLowerCase() === 'south-america') {
          filteredData = data.filter((country: Country) => 
            country.subregion === 'South America'
          )
        }
        
        const sortedData = filteredData.sort((a: Country, b: Country) => 
          a.name.common.localeCompare(b.name.common)
        )
        setCountries(sortedData)
      } else {
        console.error('API response is not an array:', data)
        setCountries([])
      }
    } catch (error) {
      console.error('Error fetching countries:', error)
      setCountries([])
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
            onClick={() => setVisibleCount(prev => prev + 9)}
            className="px-6 py-2 rounded-b-xs border border-smoke bg-smoke text-black cursor-pointer transition-all hover:bg-deepBlue hover:text-smoke duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}