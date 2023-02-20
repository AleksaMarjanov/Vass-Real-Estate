"use client";


import { useState, useEffect } from 'react';
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const OurServices = () => {
  const [ rotate, setRotate ] = useState<boolean>(false)

  useEffect(() => {
    if ( typeof window !== "undefined" ) {
      rotate ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }
  }, [rotate])


  return (
    <section
      className={`${styles.innerWidth} mt-12 flex flex-col items-center justify-center ${styles.xPaddings} overflow-x-hidden`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 0.85)}
          className="text-center"
        >
          <h3 className="text-5xl">Our Services</h3>
        </motion.div>
      <div className={`${styles.xPaddings} flex flex-col items-center justify-center lg:flex-row mt-12 max-[425px]:mt-6 space-x-6 md:gap-6 mx-6`}>
        <motion.div
          variants={slideIn("left", "tween", 0.35, 0.85)}
          className="flex items-center justify-center"
        >
          <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
          <Image
            src="/apartment.svg"
            className="object-contain"
            alt="Services"
            fill
            priority
          />
          </div>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.35, 0.85)}
        className={`flex items-center justify-center`}
        >
          <motion.div 
          variants={textVariant(1.4)}
          className="py-6 "
          >
          <h3 className="font-extrabold">Residential Real Estate Services
</h3>
            <ul className="list-disc mt-12">
              <li>
              Assistance with buying and selling homes, condos, and townhouses
              </li>
              <li>Access to a wide range of residential properties, including luxury homes and investment properties</li>
              <li>Professional guidance throughout the entire buying or selling process, from initial consultations to closing the deal 🔥</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
