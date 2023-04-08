
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const apiKey = process.env.apiKey

const MapForContact = () => {


    return (
        <MapContainer
            center={[48.148343, -103.62088]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            attributionControl={false}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
            />
            <Marker
                position={[48.148343, -103.62088]}
                // @ts-ignore
                dragabble={true} >
                <Popup>417 1st Ave E</Popup>

            </Marker>
        </MapContainer>
    )
}

export default MapForContact
