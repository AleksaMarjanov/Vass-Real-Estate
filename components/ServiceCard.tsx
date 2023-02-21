"use client";

import styles from "@/styles";
import { slideIn, staggerContainer, textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Services } from "@/typings";
import { useState } from 'react';
import { urlFor } from "@/lib/urlFor";

type Props = {
  services: Services[];
  // handleMenusFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  // activeFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleMenusFilter: any,
  activeFilter: any,
  filterServices: any;
  animateCard: any;
};


const ServiceCard = ({ services, handleMenusFilter, activeFilter, filterServices, animateCard}: Props, ) => {

  
  const itemActive = 'xl:border-2 hover:bg-primary-black xl:border-[#F7AB0A] px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-white';

  const notActiveItem = 'xl:border-2 hover:bg-primary  xl:border-[#F7AB0A] px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-black'

  return (
    <section
      className={`${styles.innerWidth} mt-12 max-[425px]:mt-4 flex flex-col items-center justify-center ${styles.xPaddings} max-[425px]:mt-48`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.85)}
          className="text-center"
        >
          <h3 className="text-5xl mt-12 max-[425px]:mt">Our Services</h3>
        <div className="flex-1 w-full flex-col ">
      <div className="flex flex-row flex-wrap justify-center items-center mt-16 lg:mt-2 px-3 mr-0 mb-8">
        {['Residental', 'Industrial'].map((item,index) => (
          <div key={index}
          onClick={() => handleMenusFilter(item)}
          className={`pt-2 pr-4 m-2 bg-[#F7AB0A] rounded-lg text-white font-semibold cursor-pointer transition-all animate ease-in duration-300 hover:bg-coffee-blue hover:text-white flex justify-center items-center p-text ${
            activeFilter === item ? `${itemActive}` : `${notActiveItem}`
          }`}
          >
              {item}
          </div>
          ))}
          </div>
          </div>
          <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
        >
          {filterServices.map((service : any, index: any) => (
            
            <div
            className="w-270 flex-col md:flex-row m-8 p-4 rounded-lg  cursor-pointer transition-all animate ease-in duration-300 hover:shadow-xl flex justify-center items-center"
            key={index}
            >
             <div className="relative w-full">
              <Image
                src={urlFor(service.mainImage).url()}
                className="object-cover object-left lg:object-center"
                alt={service.title}
                width={300}
                height={300}
                priority
                />
            </div> 
             <div className="p-2 w-full relative flex flex-col items-center justify-center">
                 <h4 className="font-bold">{service.title}</h4>
                 <p className="leading-5 mt-2">{service.description}</p>
             </div>
           </div>
          ))}
          </motion.div>
      </motion.div>
          </motion.div>
    </section>
  );
};

export default ServiceCard;
