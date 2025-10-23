'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CountryCardProps {
  country: {
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
}

export default function CountryCard({ country }: CountryCardProps) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const formatPopulation = (population: number) => {
    if (!mounted) return population.toString()
    return population.toLocaleString()
  }

  return (
    <div 
      className="bg-midnightBlue flex px-6 py-6 rounded-sm shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => router.push(`/country/${country.name.common}`)}
    >
      <div className="relative aspect-square w-42 rounded-full overflow-hidden">
        <Image
          src={country.flags.png}
          alt={country.flags.alt || country.name.common}
          className="object-cover"
          fill
        />
      </div>
      <div className="pl-4 flex-1 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">{country.name.common}</h2>
        <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
        <p><span className="font-semibold">Population:</span> {formatPopulation(country.population)}</p>
        <p><span className="font-semibold">Region:</span> {country.region}</p>
      </div>
    </div>
  )
}