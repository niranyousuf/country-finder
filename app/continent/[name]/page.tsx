import CountryList from '@/components/CountryList'

type Props = {
  params: {
    name: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}
type PageProps = {
  params: { [key: string]: string }
}
export default function ContinentPage({ params }: PageProps) {
  const continentName = params.name;
  const formattedName = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Countries in {formattedName}
      </h1>
      <CountryList searchTerm="" continent={params.name} />
    </div>
  )
}