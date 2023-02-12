"use client";


import {urlFor} from '../lib/urlFor'
import Image from "next/image";
import {ArrowUpRightIcon } from '@heroicons/react/24/solid'
import styles from '@/styles';
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, slideIn } from '@/utils/motion';
import ClientSideRoute from './ClientSideRoute';


type Props = {
   listings : Listing[];
}

const ListingsList = ({ listings } : Props) => {
  
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.paddings}`}>
      <motion.div 
      variants={slideIn('left', 'tween', 0.3, 1 )}
      className='text-bold text-2xl flex items-left justify-left px-12 py-6'>Available listings</motion.div>
      <hr className="border-[#F7AB0A] mb-10" />

    <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-10 gap-y-16 pb-24">
      {listings.map(listing => (
        <ClientSideRoute route={`/listing/${listing.slug.current}`} key={listing._id}>
        <motion.div 
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
         className="group flex flex-col cursor-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image 
              className="object-cover object-left lg:object-center"
              src={urlFor(listing.mainImage).url()}
              alt={listing.author.name}
             fill 
              />
              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold max-[768px]:text-[14px]'>{listing.title}</p>
                    <p className='max-[768px]:text-[12px]'>{new Date(listing._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {listing.categories.map(category => (
                      <div key={category._id}>
                        <p className="text-bold max-[425px]:text-[12px]">{category.title}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className='mt-5 flex-1'>
                      <p className='underline text-lg font-bold'>{listing.title}</p>
                      <p className='text-whiteline-clamp-3 b-black'>
                        {listing.description}
                      </p>
            </div>

            <p className="flex font-bold mt-5 items-center group-hover:underline">
              Find Out More
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </p>
        </motion.div>
        </ClientSideRoute>
      ))}
      </div>
    </motion.div>
  )
}

export default ListingsList