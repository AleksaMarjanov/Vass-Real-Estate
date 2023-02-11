'use client';

import {useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from "../utils/motion";
import { MdOutlineRequestQuote } from 'react-icons/md'
import styles from '@/styles';
// import { client, urlFor } from '../app/client'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [socials, setSocials] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "social"]'
  //   client.fetch(query).then((data) => {
  //     setSocials(data)
  //     console.log({data})
  //   })
  
  // }, [])
  

  return (
    <motion.footer
    variants={footerVariants}
    initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8`}
    >
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-col">

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className='flex items-center justify-center'>
          <Image
            src='/LogoSvg.svg'
            alt="Vass Real Estate Logo"
            width={500}
            height={500}
            priority
            />
            </div>
            <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear()} Vass Real Estate Solutions. All Rights Reserved
            </p>
{/*             
            <div className="flex gap-4">
            {socials.map((social, index) => (
              <div key={social._id}>
              <Link href={social.url}>
              <Image
                key={social.name}
                src={`${urlFor(social.imgUrl)}`}
                alt={social.name}
                width={50}
                height={50}
                className="w-[24px] h-[24px] object-contain cursor-pointer relative z-[50]"
              />
              </Link>
              </div>
            ))}
            </div> */}
          </div>
        </div>
    </motion.footer>
  )
}

export default Footer