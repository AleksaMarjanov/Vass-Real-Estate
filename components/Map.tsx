"use client;"

import React, { useEffect } from 'react'
import dynamic from "next/dynamic";
import { Listing } from '@/typings';
import { usePathname } from 'next/navigation';

const MapWithNOSSR = dynamic(() => import("./MapParams"), {
  ssr: false,

});

type Props = {
  listing: Listing;
}

const Map = async ({ listing } : Props) => {


return (
    <div className="relative z-[0] h-[60vh] max-[425px]:h-[40vh] w-[60%] max-[425px]:w-full max-[425px]:px-2 no-repeat">
      <MapWithNOSSR listing={listing}/>
    </div>
  )
}

export default Map