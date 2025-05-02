'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapComponentProps {
  center: number[]
  countryCode: string
  zoom: number
}

export default function MapComponent({ center, countryCode, zoom }: MapComponentProps) {
  const [geoData, setGeoData] = useState<any>(null)

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson`)
        const data = await response.json()
        const countryFeature = data.features.find(
          (feature: any) => feature.properties.ISO_A3 === countryCode
        )
        setGeoData(countryFeature ? { type: 'FeatureCollection', features: [countryFeature] } : null)
      } catch (error) {
        console.error('Error fetching GeoJSON:', error)
      }
    }

    if (countryCode) {
      fetchGeoData()
    }
  }, [countryCode])

  if (!center || !countryCode) return null

  return (
    <MapContainer
      center={[center[0], center[1]]}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData && (
        <GeoJSON
          data={geoData}
          style={{
            fillColor: '#ccc',
            weight: 2,
            opacity: 1,
            color: '#1d4ed8',
            fillOpacity: 0.7
          }}
        />
      )}
    </MapContainer>
  )
}