"use client";

import styles from "@/styles";
import { slideIn, staggerContainer, textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Services } from "@/typings";
import { useEffect, useState } from 'react';
import { urlFor } from "@/lib/urlFor";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";



type Props = {
  service: Services;
}

const ServiceCard = () => {

  const [services, setServices] = useState([])
  const [filterServices, setFilterServices] = useState([])
  const [activeFilter, setActiveFilter] = useState('Property Managment');
  const [animateCard, setAnimateCard ] = useState({ y: 0, opacity: 1 });

const query = groq`
  *[_type == 'services']
`



useEffect(() => {
  const fetchServices = async () => {
    const services = await client.fetch(query)
    setServices(services)
    setFilterServices(services)
    console.log(services, 'dasdasdasdsadas')
    // Have to fix types of services tags doesn't exist on type Props
    // @ts-ignore 
    setFilterServices(services.filter((service: service) => service.tags.includes(activeFilter)));
  }
  fetchServices()
}, [])


const handleServiceFilter = (item : string) => {
  setActiveFilter(item);
  // @ts-ignore
  setAnimateCard([{ x: 100, opacity: 0 }]);
  
  setTimeout(() => {
    // @ts-ignore
    setAnimateCard([{ x: 0, opacity: 1 }]);
    if (item === "All") {
      setFilterServices(services);
    } else {
      // @ts-ignore
      setFilterServices(services.filter((service) => service.tags.includes(activeFilter)));
    }
  }, 300);
};


  
  const itemActive = 'xl:border-2 hover:bg-primary-black xl:border-[#121a34] border-[#121a34] px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-white';

  const notActiveItem = 'xl:border-2 hover:bg-white  xl:border-[#F7AB0A] px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-black'

  return (
    <section
      className={`${styles.innerWidth} ${styles.xPaddings} mt-12 flex flex-col items-center justify-center `}
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
          <h3 className="text-5xl mt-12 max-[425px]:mt">What we do</h3>
        <div className="flex-1 w-full flex-col ">
      <div className="flex flex-row flex-wrap justify-center items-center mt-16 lg:mt-2 px-3 mr-0 mb-8">
        {['Property Managment', 'Residential', 'Apartment Locator'].map((item,index) => (
          <div key={index}
          onClick={() => handleServiceFilter(item)}
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
          {filterServices.map((service : Services, index: number) => (
            
            <div
            className="w-270 flex-col md:flex-row m-8 p-4 rounded-lg  cursor-pointer transition-all animate ease-in duration-300 hover:shadow-xl flex justify-center items-center"
            key={index}
            >
            
             <div className="p-2 w-full relative flex flex-col items-left justify-left text-left">
                 <h4 className="font-bold">{service.title}</h4>
                 <p className="leading-5 mt-2">{service.description}</p>
             </div>
              <div className="relative w-full flex items-center justify-center">
              <Image
                src={urlFor(service.mainImage).url()}
                className="object-cover lg:object-center"
                alt={service.title}
                width={300}
                height={300}
                priority
                />
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
