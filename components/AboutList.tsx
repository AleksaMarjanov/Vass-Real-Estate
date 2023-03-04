"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { urlFor } from "@/lib/urlFor";
import Image from "next/image";
import { PageInfo, Social } from "../typings";
import styles from "@/styles";
import { SocialIcon } from "react-social-icons";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};


const AboutList = ({ pageInfo, socials }: Props) => {

  return (
    <section className={`${styles.paddings} relative z-10`}>
   
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} items-center justify-center mx-auto flex flex-col  gap-6 mt-6`}
      > 
      <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
       className="relative flex flex-col max-[425px]:px-6 flex-[1] justify-center items-center"
      >
        <Image
          className="object-cover object-center rounded-[10px] w-full h-auto min-h-[210px] max-h-[540px]"
          src={urlFor(pageInfo.profilePic).url()}
          alt={pageInfo.name}
          width={300}
          height={300}
          priority
        />
        <div className="flex items-center justify-center space-x-3 mt-3 flex-row ">
        {socials.map(social => (
          <div
          className="group"
            key={social._id}
          >
            <SocialIcon
              url={social.url}
              fgColor="white"
              className="group-hover:bg-slate-700 rounded-full transition-all ease-in-out duration-700"
              bgColor="transparent"
            />
          </div>
         ))} 
        </div>
      </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 1)}
          className="flex-[1.5]  lg:max-w-[840px] flex justify-end flex-col gradient-05 sm:p-8 p-4 m-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
      <div
    className={`feedback-gradient`}
  />    
  {/* <div className="relative"> */}
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Deano Vass
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder
          </p>

          <p className="mt-[24px] font-normal sm:text-[18px] text-[18px] sm:leading-[45px] leading-[20px] text-white">
            {pageInfo.backgroundInformation}
              </p>
  {/* </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutList;
