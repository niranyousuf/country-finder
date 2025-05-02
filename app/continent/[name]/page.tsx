import { Metadata } from 'next'
import CountryList from '@/components/CountryList'

type Props = {
  params: Promise<{ name: string }>
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function ContinentPage({ params }: Props) {
  const resolvedParams = await params;
  const continentName = resolvedParams.name;
  const formattedName = continentName.charAt(0).toUpperCase() + continentName.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Countries in {formattedName}
      </h1>
      <CountryList searchTerm="" continent={continentName} />
    </div>
  )
}