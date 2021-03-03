import React, { useEffect } from 'react';
import L from 'leaflet';
import { } from 'mapbox-gl-leaflet';

function MapContainer() {
    let mapContainer: any;

    useEffect(() => {
      const initialState = {
        lng: 11,
        lat: 49,
        zoom: 4
      };
  
      const map = L.map(mapContainer).setView([initialState.lat, initialState.lng], initialState.zoom);
  
      // the attribution is required for the Geoapify Free tariff plan
      map.attributionControl.setPrefix('').addAttribution('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>');
  
      var myAPIKey = '4aa12a33c3124fb78c76819922608a89';
      const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
  
      L.mapboxGL({
        style: `${mapStyle}?apiKey=${myAPIKey}`,
        accessToken: 'no-token'
      }).addTo(map);
    }, [mapContainer]);
  
    return (
      <div className="map-container" ref={el => mapContainer = el}>
      </div>
    )
}

export default MapContainer;