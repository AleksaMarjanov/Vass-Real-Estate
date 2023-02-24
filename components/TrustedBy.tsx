"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from "@/utils/motion";


const TrustedBy = () => {
const [trusted, setTrusted] = useState([])

const query = groq`
*[_type == 'trustedBy']
`
useEffect(() => {

    const fetchTrusted = async () => {
        const trusted = await client.fetch(query)
        setTrusted(trusted);
        console.log(trusted);
    }
    fetchTrusted()
}, [])


  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}} 
    className="h-[30vh] max-[425px]:h-[30%] mt-12 relative">
    <motion.div 
     variants={slideIn('up', 'tween', 0.6, 0.85)}
    className="relative items-center justify-center flex w-full h-[120px] max-[425px]:h-[100px] bg-darker-white/50">
      <Swiper
      className="swiper-wrapper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints = {{
            499: {
                slidesPerView: 3,
                spaceBetween: 100
            },
            999: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }}
        loop={true}
        speed={5000}
        autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        // pagination={{ clickable: true }}
      >
        {trusted.map((slide : any, index : number) => (
          <div className="swiper-slide m-0 flex items-center justify-center" key={slide._id} >
            <SwiperSlide key={slide._id + index} >
              <div className="relative flex items-center justify-center px-2 w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
                <Image
                  className="object-contain object-center"
                  src={urlFor(slide.mainImage).url()}
                  alt="trusted by"
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  priority
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </motion.div>
    </motion.div>
  );
};

export default TrustedBy;