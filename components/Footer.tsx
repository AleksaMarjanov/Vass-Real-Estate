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
    try {
      const fetchData = async () => {
        let socials = await client.fetch(query);
        setSocials(socials)
      }
      // call the function
      fetchData()
    } catch (err) {
      (console.error)
    }
  }, [])
  
  return (
      <FooterList socials={socials} />
    )
}

export default Footer