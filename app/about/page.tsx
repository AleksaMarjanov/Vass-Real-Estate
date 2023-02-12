"use client";

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '@/utils/motion';
import { urlFor } from '@/lib/sanity.client';
import Image from 'next/image';
import { PageInfo } from '../../typings'


type Props = {  
    pageInfo: PageInfo;
  }

const About = ({ pageInfo } : Props) => {

    return(
<div>
<p>{pageInfo?.backgroundInformation}</p> 
</div>
    )
}

export default About;