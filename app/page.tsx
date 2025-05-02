'use client'

import ContinentCard from '@/components/ContinentCard'

const continents = [
  {
    name: 'Africa',
    slug: 'africa',
    countries: 54,
  },
  {
    name: 'Asia',
    slug: 'asia',
    countries: 48,
  },
  {
    name: 'Europe',
    slug: 'europe',
    countries: 44,
  },
  {
    name: 'North America',
    slug: 'north-america',
    countries: 23,
  },
  {
    name: 'South America',
    slug: 'south-america',
    countries: 12,
  },
  {
    name: 'Oceania',
    slug: 'oceania',
    countries: 14,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Explore Continents</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {continents.map((continent) => (
            <ContinentCard key={continent.name} continent={continent} />
          ))}
        </div>
      </div>
    </div>
  )
}
