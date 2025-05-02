'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface ContinentCardProps {
  continent: {
    name: string
    slug: string
    countries: number
  }
}

export default function ContinentCard({ continent }: ContinentCardProps) {
  const router = useRouter()

  return (
    <div 
      className="bg-black rounded-sm overflow-hidden cursor-pointer hover:shadow-xl"
      onClick={() => router.push(`/continent/${continent.name.toLowerCase()}`)}
    >
      <div className="relative w-full h-100 flex items-center justify-center">
        <Image
          src={`/maps/${continent.slug.toLowerCase()}.png`}
          alt={`${continent.name} map`}
          fill
          className="!h-auto sm:!h-full !w-full sm:!w-auto mx-6 sm:mx-auto my-6"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{continent.name}</h2>
        <p className="text-gray-600 hidden">{continent.countries} countries</p>
      </div>
    </div>
  )
}