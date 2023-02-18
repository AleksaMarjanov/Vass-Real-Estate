import { groq } from 'next-sanity'
import React from 'react'
import MapParams from './MapParams';
import dynamic from "next/dynamic";
import { client } from '@/lib/sanity.client';

const MapWithNOSSR = dynamic(() => import("./MapParams"), {
  ssr: false,
});

const Map = async () => {



const query = groq`
*[_type == 'listing'] {
    ...,
    path->
}
`

const listings  = await client.fetch(query)
  return (
    
      <MapWithNOSSR listings={listings} />
  )
}

export default Map