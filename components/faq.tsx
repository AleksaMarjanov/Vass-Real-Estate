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

export const revalidate = 60;

const FAQ = () => {
    const [faqs, setFaqs] = useState([])

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
        <section className={`text-white`} >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`${styles.innerWidth} w-full container px-5 py-24 mx-auto relative z-10`}
                id="faq">
                <motion.div
                    variants={slideIn('up', 'tween', 0.3, 0.9)}
                    className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 relative z-10">
                    <div className="w-full px-4 py-2 sm:text-[24px] md:text-[18px]">
                        <motion.div
                            variants={textVariant(1.1)}
                        >
                            <h3 className="flex items-center justify-center text-2xl md:text-4xl font-bold mt-12 max-[425px]:mt-4 max-[425px]:px-12">
                                Frequently Asked
                            </h3>
                        </motion.div>
                        {faqs?.map((faq: FAQs, index) => (
                            <div key={faq.question + index} className="py-5">
                                <details className="group open:shadow-xl rounded-lg open:focus:ring-nice-blue cursor-pointer">
                                    <summary className="font-extrabold flex items-center px-3 py-2 justify-between cursor-pointer">
                                        {faq.question}
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>

                                    <p className="mt-3 group-open:animate-fadeIn px-4 py-2">
                                        {faq.answer}
                                    </p>
                                </details>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FAQ;
