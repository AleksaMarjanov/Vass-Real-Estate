"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Listing } from "@/typings";
import { LatLng } from "leaflet";

type Props = {
  listing: Listing;
}

const MapParams = ({ listing } : Props) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(listing != null) {
      setLoading(false);
    } 

  }, [listing, loading])


  return (
    !loading ? 
    <>
      <MapContainer
        key={listing._id}
        center={new LatLng(listing.path[0].lat, listing.path[0].lng)}
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
        position={new LatLng(listing.path[0].lat, listing.path[0].lng)} 
         // @ts-ignore
        dragabble={true} >
          <Popup>Property</Popup>
        </Marker>
      </MapContainer>
    </>
    : <p>Loading...</p>
  )
}

export default MapParams