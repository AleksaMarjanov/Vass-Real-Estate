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
      className={`${styles.xPaddings} flex md:flex-row w-full mt-48 max-[425px]:mt-64 
        flex-col items-left justify-left max-[425px]:px-4 px-18 md:px-36 gap-12 max-[768px]:gap-6 text-white min-h-[80%] mb-32`}
    >
      {bullets.map((bullet) => (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          key={bullet._id}
          className="flex items-left justify-left flex-col space-y-4"
        >
          <motion.div 
           variants={slideIn('up', 'tween', 0.3, 0.85)}
          className="flex flex-row items-left justify-left gap-3 ">
            <motion.div variants={textVariant(1.1)}
            >
            <Image
             className="rounded-full"
             src={urlFor(bullet.mainImage).url()}
              alt={bullet.title}
              width={50}
              height={50}
              priority
            />
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
