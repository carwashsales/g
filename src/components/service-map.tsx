'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function ServiceMap() {
  const position = { lat: 0.3476, lng: 32.5825 }; // Kampala, Uganda
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-lg border">
        <p className="text-muted-foreground text-center px-4">
          Google Maps API Key is missing. Please add it to your environment variables.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg border">
        <Map
          defaultCenter={position}
          defaultZoom={11}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="cleannest_map"
          styles={[
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                { "color": "#7c93a3" },
                { "lightness": "-10" }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry",
              "stylers": [
                { "visibility": "on" }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                { "color": "#a0a49e" }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                { "color": "#a0a49e" }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#f0f4f8" }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "labels.text.fill",
              "stylers": [
                { "color": "#7c93a3" }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#d6e2eb" }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                { "lightness": "20" }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#ffffff" }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                { "color": "#d6e2eb" },
                { "weight": "0.50" }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                { "color": "#7c93a3" }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#a0d2eb" }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                { "lightness": "0" },
                { "color": "#a0d2eb" },
                { "weight": "0.50" }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#a0d2eb" }
              ]
            }
          ]}
        >
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}
