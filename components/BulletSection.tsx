"use client";

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import BulletList from "./bulletList";


const query = groq`
*[_type == 'bulletSection']
`

export const revalidate = 60;

const BulletSection = () => {
  const [bullets, setBullets] = useState([])

  useEffect(() => {
    try  {
      const fetchBullets = async () => {
        const data = await client.fetch(query)
        setBullets(data)
      }
      fetchBullets()
    } catch(err) {
      (console.error)
    }
  }, [])

  return (
    <BulletList bullets={bullets}/>
  );
};

export default BulletSection;
