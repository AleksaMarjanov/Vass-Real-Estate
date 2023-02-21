"use client";

import styles from "@/styles";
import { slideIn, staggerContainer, textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Services } from "@/typings";
import { urlFor } from "@/lib/urlFor";

type Props = {
  services: Services[];
};

const ServiceCard = ({ services }: Props) => {
  return (
    <section
      className={`${styles.innerWidth} mt-12 max-[425px]:mt-4 flex flex-col items-center justify-center ${styles.xPaddings} `}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.85)}
          className="text-center"
        >
          <h3 className="text-5xl mt-12 max-[425px]:m,t">Our Services</h3>
        </motion.div>
        {services.map((service) => (
          <div
            key={service._id}
            className={`${styles.xPaddings} max-w-[1024px] flex flex-col items-center justify-center lg:flex-row mt-12 max-[425px]:mt-6 space-x-6 md:gap-6 mx-6`}
          >
           
            <motion.div
              variants={slideIn("left", "tween", 0.35, 0.85)}
              className={`flex items-center justify-center`}
            >
              <motion.div variants={textVariant(1.4)} className="py-6 max-[425px]:py-2 object-contain">
                <h3 className="font-extrabold">{service.title}</h3>
                <ul className="list-disc mt-12">
                  <li>{service.description}</li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 0.35, 0.85)}
              className="flex items-center justify-center"
            >
            <div className="relative w-full">
              <Image
                src={urlFor(service.mainImage).url()}
                className="object-cover object-left lg:object-center"
                alt={service.title}
                width={300}
                height={300}
                priority
              />
            </div> 
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceCard;
