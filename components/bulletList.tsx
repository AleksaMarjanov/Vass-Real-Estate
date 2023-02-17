"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import Image from "next/image";
import { BulletSection } from '../typings'
import { urlFor } from "@/lib/urlFor";

type Props = {
    bullets: BulletSection[];
}


const BulletList = ({ bullets } : Props) => {
  return (
    <section
      className={`w-full px-36 max-[425px]:px-3 max-[768px]:px-24 flex flex-row space-x-6 mt-24 max-[768px]:gap-12
        max-[768px]:flex-col items-center justify-center h-[300px] text-white min-h-[80%]`}
    >
      {bullets.map((bullet) => (
      <div key={bullet._id} className="flex items-left justify-left flex-col space-y-4">
        <div className="flex flex-row items-left justify-left gap-3 ">
          <Image
            src={urlFor(bullet.mainImage).url()}
            alt={bullet.title}
            width={30}
            height={30}
            priority
          />
          <h2>{bullet.title}</h2>
        </div>
        <p className="text-[14px] max-[768px]:text-[18px] flex items-left justify-center">
         {bullet.description}
        </p>
        </div>

      ))}
    </section>
  )
}

export default BulletList