"use client";

import { initAccordions } from "flowbite";
import "flowbite";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { FAQs } from "@/typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles";
import { textVariant } from './../utils/motion';

type Props = {
  faq: FAQs[]
}


const FAQ = () => {
  const[faqs, setFaqs ] = useState([])
  // const[expand, setExpand] = useState<boolean>(false)
  // const expandClass = expand ? 'display' : 'hidden';
  // const ansClass = `${expandClass} p-4`
  // const [active, setActive] = useState('168c242a-067e-4ae8-8f7e-5f05aa84a97f')
  // const contentRef = useRef<HTMLElement>(null)

  const query = groq`
  *[_type == 'faqs']
  `
  useEffect(() => {
    const fetchFaqs = async () => {
      const faqs = await client.fetch(query)
      setFaqs(faqs)
    }
    fetchFaqs()
  }, [])


  console.log(faqs)
  return (
    <section className={`${styles.paddings} text-white`} >
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
  className={`${styles.innerWidth} w-full container px-5 py-24 mx-auto relative z-10`}
    id="faq"> 
        <motion.div 
        variants={slideIn('up', 'tween', 0.3, 0.9)}
        className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 relative z-10">
          <div className="w-full lg:w-1/2 px-4 py-2 sm:text-[24px] md:text-[18px]">
            <motion.div
            variants={textVariant(1.1)}
            >
            <h3 className="text-2xl mt-12 max-[425px]:mt-4 max-[425px]:px-12">
            Frequently Asked
          </h3>
            </motion.div>
          {faqs?.map((faq : FAQs, index) => (
                <details key={faq.question + index} className="mb-4">
              <summary className="font-semibold mt-6 bg-nice-blue rounded-md py-2 px-4 cursor-pointer hover:bg-nice-blue/60 transition-all duration-300 ease-in-out">
                  {faq.question}
                </summary>

              <span className="text-white">
                  {faq.answer}
              </span>
                </details>
          )).slice(0,4)}

          </div>
          <div className="w-full lg:w-1/2 px-4 py-2 sm:text-[24px] md:text-[18px]">
          {faqs?.map((faq : FAQs, index) => (
            <details key={faq.question + index} className="mb-4 transition-all animate-fade-in-out duration-500">
                  <summary className="font-semibold  bg-nice-blue rounded-md py-2 px-4 cursor-pointer hover:bg-nice-blue/60 transition-all duration-300 ease-in-out marker">
                  {faq.question}
                </summary>

              <span className="text-white">
                  {faq.answer}
              </span>
                </details>
          )).slice(4,8)}
          </div>
        </motion.div>
    </motion.div>
    </section>
  );
};

export default FAQ;
