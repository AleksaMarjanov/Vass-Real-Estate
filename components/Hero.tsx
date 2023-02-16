"use client";

import Image from 'next/image'
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
    return(
<motion.div
variants={staggerContainer}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className={`${styles.xPaddings} items-center flex justify-center flex-row max-[768px]:flex-col relative z-0`}
>      
    <motion.div
    variants={slideIn('left','tween', 0.3, 0.85)}
    >
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className="flex flex-col relative z-[50] items-left justify-left mt-0 max-[425px]:px-2"
        >
        <motion.h1 variants={textVariant(1.1)}  className="text-5xl max-[768px]:text-3xl text-bold py-12 max-[425px]:py-2">Discover Your Perfect <span className="underline decoration-[#F7AB0A] text-extrabold">Property</span></motion.h1>
        <motion.div
        variants={textVariant(1.2)}
        >
        <p className="text-normal text-md text-[#d3d2d2]">
        Your Trusted Real Estate Broker for Exceptional Service and Results
        </p>
        </motion.div>
        </motion.div>

        <motion.div 
        variants={textVariant(1.6)}
        className="max-[768px]:flex items-center justify-center">
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
        </motion.div>
      </motion.div>

      
      
        <motion.div 
        variants={slideIn('right','tween', 1, 1)}
        className="w-[1024px] h-[480px] max-[768px]:w-[480px] max-[768px]:h-[260px] max-[425px]:w-[280px] relative z-[10] right-0">
      <Image 
      src="/bestPlace.svg"
      alt="heroImage"
      fill
    //   className="object-contain"
      />
        </motion.div>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        >
        <motion.div
        variants={fadeIn('left', 'tween', 0.8, 0.85)}
        >
            <div className="w-full absolute top-[30%] bg-[#0086bb]/10 left-0 h-[500px] max-[768px]:h-[300px] -skew-y-12" />
        </motion.div>
        </motion.div>
 </motion.div> 
    )
}

export default Hero;