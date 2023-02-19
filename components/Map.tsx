"use client";

import React, { useEffect } from 'react'
import dynamic from "next/dynamic";
import { Listing } from '@/typings';
import Link  from 'next/link'
import { useRouter } from 'next/navigation'

const MapWithNOSSR = dynamic(() => import("./MapParams"), {
  ssr: false,
});

type Props = {
  listing: Listing;
}

const Map = ({ listing } : Props) => {
  const router = useRouter()

return (
    <div className="relative z-[0] h-[60vh] max-[425px]:h-[40vh] w-[60%] max-[425px]:w-full max-[425px]:px-2 no-repeat">
      <MapWithNOSSR listing={listing}/>
      <div className="mt-2">
        <Link href="https://www.google.com/maps">

          <button
            className="border-2 border-black decoration-none cursor-pointer p-3 minmd:p-1 text-lg minmd:text-sm font-poppins uppercase tracking-[1px] hover:border-[#0086bb] transition-all ease-out"
            type="button"
            onClick={() =>
              router.push(
                `https://www.google.com/maps`
              )
            }
          >
            Get Directions
          </button>
        </Link>
        </div>
    </div>
  )
}

export default Map