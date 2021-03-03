import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  return (
    <MapContainer center={[42.6978634,23.3221789]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[42.6978634,23.3221789]}></Marker>
    </MapContainer>
  )
}

export default Map;