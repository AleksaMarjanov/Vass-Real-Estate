// "use client";

import { previewData } from "next/headers";

import PreviewSuspense from '../../components/PreviewSuspense'
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero, BulletSection } from '@/components'
import { fadeIn, staggerContainer } from "@/utils/motion";


const HomePage = () => {

  return(
    <main className="items-center justify-center py-12">
      <section id="hero">
      <Hero />
       {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      >

      <a href="#bulletsection" rel="norefferer" className="flex items-center justify-center mt-[64px] cursor-pointer">
      <motion.img
          variants={fadeIn('up', 'tween', 0.3,1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[38px] h-[38px] drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out object-contain  flex items-center justify-center rounded-full bg-[#F7AB0A] px-1 py-1"
          >
          </motion.img>
      </a>

      </motion.div>  */}
      </section>
      <section id="bulletsection">
        {/* Work around TypeScript Error Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key `ts(2786)`*/}
        {/* @ts-expect-error Server Component */}
        <BulletSection/>
      </section>      
    </main>
  ) 
}

export default HomePage;

