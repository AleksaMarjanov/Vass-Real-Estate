import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'
import { FooterList } from '.'


const query = groq`
*[_type == 'social']`


export const revalidate = 60;

const Footer = async () => {

  const socials = await client.fetch(query)
  
  return (
      <FooterList socials={socials} />
    )
}

export default Footer