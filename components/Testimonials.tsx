"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { SliderData } from "./../lib/sliderData";
import { Testimonials } from "@/typings";

export const revalidate = 60;

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    const query = groq`
  *[_type == 'testimonials']
`;

    const fetchData = async () => {
        const data = await client.fetch(query);
        setTestimonials(data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div
                variants={fadeIn("up", "tween", 0.35, 0.85)}
                className="relative flex w-full flex-col items-center justify-center md:min-h-[70vh] "
            >
                <h2 className="py-6 px-12 text-2xl text-white md:py-12 md:px-6">
                    What people say about us
                </h2>
                <div className="flex w-full flex-row items-center justify-center md:items-start md:justify-center lg:mx-12">
                    <div className="hidden items-end justify-end md:flex">
                        <div className="relative flex h-[350px] w-[350px] items-center justify-center object-center lg:h-[400px] lg:w-[400px]">
                            <Image
                                src="./testimonials1.svg"
                                alt="testimonial picture"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    {/* with w-full content shows up but messes up the bigger screen sizes
           */}
                    <div className="w-full object-contain sm:w-[340px] lg:w-[540px]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                                disabledClass: "swiper-button-disabled",
                            }}
                            loop={true}
                            observer={true}
                            observeParents={true}
                            parallax={true}
                            autoplay={{ delay: 6000 }}
                        >
                            {testimonials?.map((testimonial: Testimonials, index: number) => (
                                <SwiperSlide key={testimonial._id + index}>
                                    <div className="swiper-slide" key={testimonial._id + index}>
                                        <div className="relative flex h-[540px] w-full items-start justify-start max-[425px]:h-[520px] max-[320px]:h-[580px] lg:h-[480px]">
                                            <motion.div
                                                variants={fadeIn("left", "tween", 0.2, 1)}
                                                initial="hidden"
                                                whileInView="show"
                                                className="object-contain p-4"
                                            >
                                                <div className="top-0 items-start justify-center py-8 lg:flex lg:flex-col lg:py-4">
                                                    <div className="white-space relative overflow-hidden text-lg text-gray-200">
                                                        <Image
                                                            src="/quotes.svg"
                                                            alt="quotes"
                                                            width={30}
                                                            height={30}
                                                            priority
                                                        />
                                                        {testimonial?.feedback}
                                                    </div>
                                                </div>
                                                <div className="relative bottom-0 flex flex-row">
                                                    {/* <Image src={testimonial.imgUrl} alt={testimonial.title} width={50} height={50} priority className="object-contain rounded-full" /> */}
                                                    <Image
                                                        src={`${urlFor(testimonial?.imgUrl).url()}`}
                                                        alt={testimonial.name}
                                                        width={50}
                                                        height={50}
                                                        priority
                                                        className="rounded-full object-contain"
                                                    />
                                                    <div className="flex-col flex px-2">
                                                        <h1 className="text-extrabold mx-6 flex items-center justify-center text-xl">
                                                            {testimonial?.name}
                                                        </h1>
                                                        <p>{testimonial?.date}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="absolute  bottom-0 right-10 mt-32 flex select-none flex-row  items-start justify-start gap-1 text-white lg:right-0">
                                <BiLeftArrowAlt
                                    size={20}
                                    className="image-swiper-button-prev z-[2] h-[40px] w-[40px] cursor-pointer bg-[#F7AB0A] p-1 transition-all duration-500 ease-in-out hover:bg-white hover:text-[#F7AB0A]"
                                />
                                <BiRightArrowAlt
                                    size={20}
                                    className="image-swiper-button-next z-[2] h-[40px] w-[40px] cursor-pointer bg-[#F7AB0A] p-1  transition-all duration-500 ease-in-out hover:bg-white hover:text-[#F7AB0A]"
                                />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;
