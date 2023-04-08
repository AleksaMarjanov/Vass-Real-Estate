
"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Listing } from "@/typings";
import { LatLng } from "leaflet";

const apiKey = process.env.apiKey

type Props = {
    listing: Listing;
}

const MapParams = ({ listing }: Props) => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (listing != null) {
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
                    style={{ height: "100%", width: "100%" }}
                    attributionControl={false}
                >
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
                    />
                    <Marker
                        position={new LatLng(listing.path[0].lat, listing.path[0].lng)}
                        // @ts-ignore
                        dragabble={true} >
                        <Popup>{listing.title}</Popup>
                    </Marker>
                </MapContainer>
            </>
            : <p className="text-2xl font-extrabold animate-pulse">Map is not avaliable at the moment...</p>
    )
}

export default MapParams
