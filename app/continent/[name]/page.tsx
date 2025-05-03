import CountryList from '@/components/CountryList'

type Props = {
  params: Promise<{ name: string }>
}

export default async function ContinentPage({ params }: Props) {
  const { name } = await params;
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Countries in {formattedName}
      </h1>
      <CountryList searchTerm="" continent={name} />
    </div>
  )
}