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
    <div className="items-center justify-center">
            <Swiper
            
            >
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default Testimonials