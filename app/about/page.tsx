export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl text-center mb-8">About World Explorer</h1>
      <div className="prose lg:prose-xl space-y-4">
        <p>
          World Explorer is a comprehensive application that allows you to explore
          countries and continents around the world. You can browse countries by
          continent, view detailed information about each country, and explore
          their locations on interactive maps.
        </p>
        <p>
          This application uses data from the REST Countries API and includes
          features such as:
        </p>
        <ul className="space-y-3">
          <li>Browse countries by continent</li>
          <li>View detailed country information</li>
          <li>Interactive maps</li>
          <li>Population and geographical data</li>
          <li>Currency and language information</li>
        </ul>
      </div>
    </div>
  )
}