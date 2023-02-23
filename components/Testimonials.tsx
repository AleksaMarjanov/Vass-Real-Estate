"use client";



import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderData } from './../lib/sliderData';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';



const Testimonials = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center md:min-h-[70vh] h-screen mt-24 bg-[#0086bb]/10">
      <h2 className="text-white md:text-3xl text-xl py-12">What people say about us</h2>
      <div className="flex flex-row items-center justify-center md:items-start md:justify-center w-full">
        <div className="hidden md:flex items-end justify-end">
          <div className='relative w-[350px] h-[350px] flex items-center justify-center object-center'>
            <Image
              src='./testimonials1.svg'
              alt="testimonial picture"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* with w-full content shows up but messes up the bigger screen sizes
         */}
        <div className='lg:w-[540px] sm:w-[340px] w-full object-contain'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          {SliderData.map((slide: any, index: any) => (
              <SwiperSlide key={slide.id + index}>
            <div className="swiper-slide" key={slide.id + index}>
                <div className="relative w-full h-[440px] max-[425px]:h-[540px] flex items-start justify-start">
                  <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    className="p-4 object-contain"
                  >

                    <div className="lg:flex lg:flex-col items-start lg:py-4 justify-center top-0">
                      <span className="text-gray-200 text-lg white-space overflow-hidden">
                        <Image src='/quotes.svg' alt="quotes" width={30} height={30} priority />{slide.desc}
                      </span>
                      <h1 className="text-xl text-bold">
                        {slide.title}
                      </h1>
                      <div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                </div>
                <div className="absolute right-0 bottom-0 text-darker-white/70 select-none gap-1  flex-row items-start justify-start mt-32 p-0 flex">
                  <HiChevronLeft
                    size={20}
                    className="z-[2] image-swiper-button-prev cursor-pointer w-[40px] h-[40px] bg-nice-blue hover:bg-darker-white hover:text-nice-blue transition-all ease-in-out duration-500"
                  />
                  <HiChevronRight
                    size={5}
                    className="z-[2] image-swiper-button-next cursor-pointer w-[40px] h-[40px] bg-nice-blue  hover:bg-darker-white hover:text-nice-blue transition-all ease-in-out duration-500"
                  />
            </div>
              </SwiperSlide>

          ))}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials