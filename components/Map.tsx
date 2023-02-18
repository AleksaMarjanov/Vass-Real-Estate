import { groq } from 'next-sanity'
import React from 'react'
import MapParams from './MapParams';
import dynamic from "next/dynamic";
import { client } from '@/lib/sanity.client';
import { Listing } from '@/typings';

const MapWithNOSSR = dynamic(() => import("./MapParams"), {
  ssr: false,

});

type Props = {
  listing: Listing;
}

const Map = async ({ listing } : Props) => {

return (
    <div className="relative z-[0] h-[60vh] w-[40%] overflow-hidden no-repeat">
      <MapWithNOSSR listing={listing}/>
    </div>
  )
}

export default Map