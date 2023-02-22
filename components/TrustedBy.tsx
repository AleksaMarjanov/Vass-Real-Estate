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
    <div className="mt-12 relative items-center justify-center flex w-full h-[150px] bg-[#0086bb]/20">
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
                slidesPerView: 2,
                spaceBetween: 50
            },
            999: {
                slidesPerView: 3,
                spaceBetween: 100
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }}
        loop={true}
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        // pagination={{ clickable: true }}
      >
        {trusted.map((slide : any, index : number) => (
          <div className="swiper-slide m-0 flex items-center justify-center" key={slide._id} >
            <SwiperSlide key={slide._id + index}>
              <div className="object-center flex items-center justify-center px-2 w-[80px] h-[80px] max-[425px]:w-[50px] max-[425px]:h-[50px]">
                <Image
                  className="object-contain"
                  src={urlFor(slide.mainImage).url()}
                  alt="trusted by"
                 fill   
                  priority
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default TrustedBy;