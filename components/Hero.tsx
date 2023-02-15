"use client";

import Image from 'next/image'
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
    return(
<div className={`${styles.xPaddings} flex items-center justify-center flex-row max-[768px]:flex-col`}
>
      <section className="w-full flex flex-col items-left justify-left mt-0 max-[425px]:px-2">
        <h1 className="text-5xl max-[768px]:text-3xl text-bold py-12 max-[425px]:py-2">Discover Your Perfect <span className="underline decoration-[#F7AB0A] text-extrabold">Property</span></h1>
        <p className="text-normal text-md text-[#d3d2d2]">
        Your Trusted Real Estate Broker for Exceptional Service and Results
        </p>
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