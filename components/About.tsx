"use client";

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '@/utils/motion';
import { urlFor } from '@/lib/sanity.client';
import Image from 'next/image';
import {PageInfo} from '../typings'


type Props = {  
    pageInfo: PageInfo;
  }

const About = ({ pageInfo } : Props) => {

    return(
<div>
    <h1 className="text-white text-2xl flex items-center justify-center">About Information</h1>
    {pageInfo.map((about) => (
        <div key={about._id}>
    <Image  src={urlFor(pageInfo?.profilePic).url()} alt={pageInfo?.name} width={500} height={500} priority />
<p>{pageInfo?.backgroundInformation}</p> 
        </div>
    ))}
</div>
    )
}   

export default About;