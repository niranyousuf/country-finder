import CountryList from '@/components/CountryList'

export default async function ContinentPage({ params }: { params: { name: string } }) {
  const continentName = params.name;
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