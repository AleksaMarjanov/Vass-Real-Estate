"use client";

import { initAccordions } from "flowbite";
import 'flowbite'
import { useEffect } from 'react';

const FAQ = () => {

    useEffect(() => {
      initAccordions();
    });


    return(
                <div className="w-full md:px-24 px-6 min-h-[30vh] md:mt-64 mt-24">
                  
<div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
  <h2 id="accordion-color-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gwhiteborder border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gwhitehover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
      <span>What types of properties does Deano Vass Real Estate deal with?</span>
      <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
    <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gwhitedark:text-white">Deano Vass Real Estate deals with a wide range of properties, including residential, commercial, industrial, and vacant land.</p>
      {/* <p className="text-gwhitedark:text-white">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
    </div>
  </div>
  <h2 id="accordion-color-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gwhitehover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
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
  
                </div>     
    )
}

export default FAQ;