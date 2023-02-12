"use client";


import {urlFor} from '../lib/urlFor'
import Image from "next/image";

type Props = {
   listings : Listing[];
}

const ListingsList = ({ listings } : Props) => {
  
  return (
    <div>
      {listings.map(listing => (
        <div key={listing._id} className="group flex flex-col cursor-pointer">
            <div className="relative max-w-[540px] h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out object-center object-contain">
              <Image 
              src={urlFor(listing.mainImage).url()}
              alt={listing.author.name}
              fill
              />
              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold'>{listing.title}</p>
                    <p>{new Date(listing._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {listing.categories.map(category => (
                      <div key={category._id}>
                        <p className="text-bold">{category.title}</p>
                      </div>
                    ))}
                  </div>
                  
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ListingsList