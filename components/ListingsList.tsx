"use client";


import {urlFor} from '../lib/urlFor'
import Image from "next/image";

type Props = {
   listings : Listing[];
}

const ListingsList = ({ listings } : Props) => {
  console .log(listings.length)
  
  return (
    <div>
      {listings.map(listing => (
        <div key={listing._id}>
            <div>
              <Image 
              src={urlFor(listing.mainImage).url()}
              alt={listing.author.name}
              width={500}
              height={500}
              />
            </div>
        </div>
      ))}
    </div>
  )
}

export default ListingsList