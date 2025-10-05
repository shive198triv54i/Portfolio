import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[26.9124, 75.7873]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[26.9124, 75.7873]}>
        <Popup>In Time Tec - Kanakpura Industrial Area, Jaipur</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Shivesh</h3>
        <span>Shivesh</span>
        <br />
        <span>Location : In Time Tec, Kanakpura Industrial Area, Jaipur (302012) </span>
        <br />
        <span>Email: shiveshtrivedi159@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
