'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false })

interface CountryDetail {
  name: {
    common: string
    official: string
    nativeName: { [key: string]: { official: string, common: string } }
  }
  flags: {
    png: string
    alt: string
  }
  capital: string[]
  population: number
  region: string
  subregion: string
  languages: { [key: string]: string }
  currencies: { [key: string]: { name: string, symbol: string } }
  borders: string[]
  maps: {
    googleMaps: string
  }
  area: number
  latlng: number[]  // Add this line for latitude and longitude
  cca3: string  // Add this line for country code
}

export default function CountryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [country, setCountry] = useState<CountryDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
        const data = await res.json()
        setCountry(data[0])
      } catch (error) {
        console.error('Error fetching country:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [params.name])

  if (loading) return <div className="text-center p-8">Loading...</div>
  if (!country) return <div className="text-center p-8">Country not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="px-6 py-2 rounded-b-xs border border-smoke bg-smoke text-black cursor-pointer transition-all hover:bg-deepBlue hover:text-smoke duration-300"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="relative">
          <Image
            src={country.flags.png}
            alt={country.flags.alt || country.name.common}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{country.name.common}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className='space-y-3'>
              <p><span className="font-bold">Official Name:</span> {country.name.official}</p>
              <p><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-bold">Region:</span> {country.region}</p>
              <p><span className="font-bold">Sub Region:</span> {country.subregion}</p>
              <p><span className="font-bold">Capital:</span> {country.capital?.join(', ')}</p>
  
              <p><span className="font-bold">Languages:</span> {Object.values(country.languages || {}).join(', ')}</p>
              <p><span className="font-bold">Currencies:</span> {
                Object.values(country.currencies || {})
                  .map(curr => `${curr.name} (${curr.symbol})`)
                  .join(', ')
              }</p>
              <p><span className="font-bold">Area:</span> {country.area.toLocaleString()} km²</p>
            </div>
          </div>
        </div>
      </div>


      {/* Replace Google Maps with OpenStreetMap */}
      <div className="mt-8 md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Map</h2>
        <div className="aspect-[16/9] w-full border rounded-lg overflow-hidden">
          <MapComponent
            center={country.latlng}
            countryCode={country.cca3}
            zoom={6}
          />
        </div>
      </div>
    </div>
  )
}