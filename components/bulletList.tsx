"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import Image from "next/image";
import { BulletSection } from "../typings";
import { urlFor } from "@/lib/urlFor";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

type Props = {
  bullets: BulletSection[];
};

const BulletList = ({ bullets }: Props) => {
  return (
    <section
      className={` flex md:flex-row w-full mt-48 max-[768px]:mt-12
        flex-col items-left justify-left max-[425px]:px-4 px-12 md:px-36 gap-12 max-[768px]:gap-6 text-white min-h-[40vh]`}
    >
      {bullets.map((bullet) => (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          key={bullet._id}
          className="flex items-left justify-left flex-col space-y-4 space-x-0"
        >
          <motion.div 
           variants={slideIn('up', 'tween', 0.3, 0.85)}
          className="flex flex-row items-left justify-left gap-3 ">
            <motion.div variants={textVariant(1.1)}
            >
              <div className="relative w-[50px] h-[50px]">
            <Image
             className="rounded-full"
             src={urlFor(bullet.mainImage).url()}
              alt={bullet.title}
              width={300}
              height={300}
              priority
            />
              </div>
            </motion.div>
            <motion.div
            variants={textVariant(1.1)}
            >
            <h2 className="font-extrabold tracking-[1px]">{bullet.title}</h2>
            </motion.div>
          </motion.div>
          <motion.div
          variants={textVariant(1.2)}
          >
          <p className="text-[16px] max-[768px]:text-[18px] flex items-left justify-center">
            {bullet.description}
          </p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default BulletList;
