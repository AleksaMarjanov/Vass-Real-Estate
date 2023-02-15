"use client";

import Image from 'next/image'
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
    return(
<div className={`${styles.xPaddings} flex items-center justify-center flex-row max-[768px]:flex-col`}
>
      <section className="flex flex-col items-left justify-left mt-0 max-[425px]:px-2">
        <div>
        <h1 className="text-5xl max-[768px]:text-3xl text-bold py-12 max-[425px]:py-2">Discover Your Perfect <span className="underline decoration-[#F7AB0A] text-extrabold">Property</span></h1>
        <p className="text-normal text-md text-[#d3d2d2]">
        Your Trusted Real Estate Broker for Exceptional Service and Results
        </p>
        </div>
        <div className="max-[425px]:flex items-center justify-center">

        <a href="/listings" className="relative inline-block text-lg group mb-10 mt-10">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-64 h-64 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F7AB0A] group-hover:-rotate-180 ease"></span>
              <span className="relative">
                Browse Properties
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12  -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F7AB0A]  rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
        
      </section>   
      
        <div className="w-[1024px] h-[480px] max-[768px]:w-[480px] max-[768px]:h-[380px] max-[425px]:w-[280px] relative right-0">
      <Image 
      src="/bestPlace.svg"
      alt="heroImage"
      fill
    //   className="object-contain"
      />
        </div>

 </div> 
    )
}

export default Hero;