'use client';

import {useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from "../utils/motion";
import styles from '@/styles';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { Social } from '@/typings';
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials: Social[]
}

const Footer = ({ socials } : Props) => {
  const [socialz, setSocialz] = useState([])


  const query = groq`
  *[_type=='social']
`

  useEffect(() => {
    const query = '*[_type == "social"]'
    client.fetch(query).then((data) => {
      setSocialz(data)
      console.log({data})
    })
  
  }, [])
  

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
          
            <div className="flex gap-4">
            {socialz.map((social) => (
        <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
        />
        ))} 
            </div> 
          </div>
        </div>
    </motion.footer>
  )
}

export default Footer