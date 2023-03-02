"use client";

import { initAccordions } from "flowbite";
import "flowbite";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { FAQs } from "@/typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
  faq: FAQs[]
}


const FAQ = () => {
  const[faqs, setFaqs ] = useState([])
  const[expand, setExpand] = useState<boolean>(false)
  const expandClass = expand ? 'display' : 'hidden';
  const ansClass = `${expandClass} p-4`


  const query = groq`
  *[_type == 'faqs']
  `

  useEffect(() => {
    initAccordions();
  });

  useEffect(() => {
    const fetchFaqs = async () => {
      const faqs = await client.fetch(query)
      setFaqs(faqs)
    }
    fetchFaqs()
  }, [])

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative "
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.45, 0.85)}
        className="max-[425x]:mt-12 min-h-[30vh] w-full px-6 md:mt-24 md:px-24"
      >
        <h1 className="max-[425px]:px-6 max-[425px]:py-6 flex items-center justify-center py-12 text-2xl">
          Frequently Asked
        </h1>
        {faqs?.map((faq : FAQs) => (
    <div key={faq._id} className="shadow rounded border border-gray-100 border-t-1">
    <div className="p-4 text-xl relative font-medium">
      <div className="w-5/6">
          {faq.question}
      </div>
      <button 
      aria-label="question-expander"
      onClick={() => setExpand(!expand)}
      className="text-xl absolute top-0 right-0 p-4 focus:outline-none">
        {expand ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </button>
    </div>
          <div className={ansClass}>
              {faq.answer}
          </div>
    </div>
        ))}

      </motion.div>
    </motion.div>
  );
};

export default FAQ;
