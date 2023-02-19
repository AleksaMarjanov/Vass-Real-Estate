"use client";

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import { FooterList } from '.'


const query = groq`
*[_type == 'social']`

export const revalidate = 60;

const Footer = () => {
  const [socials, setSocials] = useState([])
  
  
  useEffect(() => {
    
      const fetchData = async () => {
        let socials = await client.fetch(query);
        setSocials(socials)
      }
      // call the function
      fetchData()
        // // make sure to catch any error
        // .catch(console.error);
  }, [])
  
  return (
      <FooterList socials={socials} />
    )
}

export default Footer