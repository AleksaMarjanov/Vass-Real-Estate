"use client";

import { initAccordions } from "flowbite";
import "flowbite";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { FAQs } from "@/typings";

type Props = {
  faq: FAQs[]
}


const FAQ = () => {
  const[faqs, setFaqs ] = useState([])

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

        <div
          id="accordion-color"
          data-accordion="collapse"
          data-active-classes="bg-[#F7AB0A] dark:bg-gray-800 text-white dark:text-white"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 text-left font-medium text-white transition-all duration-300 ease-in-out hover:bg-nice-blue focus:ring-4 focus:ring-blue-300 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-blue-800"
              data-accordion-target="#accordion-color-body-1"
              aria-expanded="true"
              aria-controls="accordion-color-body-1"
            >
              <span>
                {/* {faq?.question} */}
              </span>
              <svg
                data-accordion-icon
                className="h-6 w-6 shrink-0 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
           <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
    <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-white dark:text-white">Deano Vass Real Estate deals with a wide range of properties, including residential, commercial, industrial, and vacant land.</p>
      {/* <p className="text-gwhitedark:text-white">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
    </div>
  </div>
    
  <h2 id="accordion-color-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
      <span>What sets Deano Vass Real Estate apart from other real estate brokers?</span>
      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
    <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 tex-white dark:tex-white">Deano Vass Real Estate is known for its exceptional client service, local expertise, and innovative use of technology.</p>
      {/* <p className="tex-white dark:tex-white">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p> */}
    </div>
  </div>
  <h2 id="accordion-color-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
    <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-white dark:text-white">TDeano Vass Real Estate helps buyers find their ideal property by conducting a comprehensive search based on their unique preferences and needs, and providing them with all the necessary information to make an informed decision.</p>
      {/* <p className="mb-2 text-white dark:text-white">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-white dark:text-white">Learn more about these technologies:</p> */}
    </div>
  </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
