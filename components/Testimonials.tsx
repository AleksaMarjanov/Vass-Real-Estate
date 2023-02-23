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
      </div>
    </div>
  )
}

export default Testimonials