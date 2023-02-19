"use client";

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import { Socials } from '.'


const query = groq`
*[_type == 'social']`

export const revalidate = 60;

const Footer = () => {
  const [socials, setSocials] = useState([])
  
  {/* Error Occured when switching layout.tsx from SSC to Client Side,To Fix This Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead. 

  fetching data inside useEffect that will load only once having dependency array empty

*/}
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
      <Socials socials={socials} />
    )
}

export default Footer