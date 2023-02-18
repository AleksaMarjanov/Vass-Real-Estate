"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Listing } from "@/typings";

type Props = {
  listings: Listing[];
}

const MapParams = ({ listings } : Props) => {
  
  return (
    <>
    {listings.map(listing => (
      
      <MapContainer
        key={listing._id}
        // center={listing.path as [number, number][]}
        center={[48.14676, -103.62206]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%"}}
      >
  
  
        <TileLayer
      url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxla3NhbWFyamFub3YiLCJhIjoiY2wxNzg4OWdnNGNsdTNjcnB0eTUyaTFpZyJ9.Gb0b3LdcSTevZuB-w1ipCA"
      attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
    />
        
        <Marker 
        // @ts-ignore
        position={[48.14676, -103.62206]} 
         // @ts-ignore
        dragabble={true} >
          <Popup>Property</Popup>
        </Marker>
      </MapContainer>
        

    ))}
    </>
  )
}

export default MapParams