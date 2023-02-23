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
    <div className="relative w-full flex flex-col items-center justify-center min-h-[70vh] mt-12 bg-[#0086bb]/10">
      <h2 className="text-white md:text-3xl text-xl py-12">What people say about us</h2>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="hidden md:flex w-1/2 flex-[0.5] items-end justify-end">
          <div className='relative w-[300px] h-[300px] flex items-center justify-center object-center'>
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
        <div className='md:w-[640px] w-full max-[425px]:px-4 relative object-contain'>
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
            <div className="swiper-slide" key={slide.id + index}>
              <SwiperSlide key={slide.id + index}>
                <div className="relative w-full h-[300px] flex items-start justify-start">
                  <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    className="absolute max-w-[470px] max-h-[600px] p-4 object-contain"
                  >

                    <div className="lg:flex lg:flex-col items-start lg:py-4 justify-center top-0">
                      <span className="text-gray-200 max-[425px]:text-sm text-lg">
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
                <div className="absolute z-[30] bottom-0 right-0 text-darker-white/70 select-none gap-1  flex-row items-start justify-start mt-32 p-0 lg:flex">
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
            </div>

          ))}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials