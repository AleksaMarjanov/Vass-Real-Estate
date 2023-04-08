"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
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
import { TrustedBy } from "@/typings";


const TrustedBy = () => {
    const [trusted, setTrusted] = useState([])

    const query = groq`
*[_type == 'trustedBy']
`
    useEffect(() => {

        const fetchTrusted = async () => {
            const trusted = await client.fetch(query)
            setTrusted(trusted);
        }
        fetchTrusted()
    }, [])


    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-[475px]:h-[40vh] max-[425px]:mt-24 mt-12 relative items-center justify-center flex flex-col gap-4 md:gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center ">Trusted By</h2>
            <motion.div
                variants={slideIn('up', 'tween', 0.6, 0.85)}
                className="relative items-center justify-center flex w-full h-[120px] max-[425px]:h-[100px] bg-darker-white">
                <Swiper
                    className="swiper-wrapper"
                    observer={true}
                    slidesPerView={2}
                    modules={[Navigation, Pagination, Autoplay]}
                    onSwiper={swiper => {
                        setTimeout(() => {
                            swiper.update(); // ------> this solution
                        }, 3000);
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    breakpoints={{
                        299: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        499: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        999: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        1440: {
                            slidesPerView: 8,
                            spaceBetween: 10
                        }
                    }}
                    loop={true}
                    speed={2500}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                >
                    {trusted.map((slide: TrustedBy, index: number) => (
                        <div className="swiper-slide m-0 flex items-center justify-center" key={slide._id} >
                            <SwiperSlide key={slide._id + index} >
                                <div className="relative gap-1 w-[130px] h-[130px] md:w-[150px] md:h-[150px] lg:w-[160px]">
                                    <Image
                                        className="object-contain lg:object-center"
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
