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
    <div className="relative z-[0] h-[60vh] w-[80%] md:w-[75%] sm:w-[80%] overflow-hidden no-repeat">
      <MapWithNOSSR listings={listings} />
    </div>
  )
}

export default Map