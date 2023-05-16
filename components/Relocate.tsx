"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, textVariant } from '@/utils/motion';
import styles from '@/styles';



const Relocate = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.xPaddings} mt-6 md:mt-12 flex items-center justify-center flex-col`}
        >
            <motion.div
                variants={slideIn('up', 'tween', 0.35, 0.65)}
                className="flex items-center justify-center flex-col"
            >
                <motion.div
                    variants={textVariant(0.3)}
                >
                    <h2 className="text-2xl md:text-4xl font-bold py-6 md:py-12">Looking to Relocate ?</h2>
                </motion.div>
                <motion.div
                    variants={textVariant(0.5)}
                    className="space-y-6 md:space-y-12 flex flex-col"
                >
                    <span className="text-lg">Fill out our Apartment Locator Form and we will get to work on locating the perfect apartment for you! </span>
                </motion.div>
                <motion.div
                    variants={textVariant(0.7)}
                >
                    <a href="https://img1.wsimg.com/blobby/go/4f02ad60-082a-40ed-9f03-92ca348f8a2f/downloads/APARTMENT%20LOCATOR%20QUESTIONNAIRE.pdf?ver=1676067867763"
                        target="_blank"
                        className="relative inline-block text-lg group mb-10 mt-10"
                        rel="noopener noreferrer">
                        <span className="relative z-10 block px-5 py-3 max-[425px]:px-3 max-[425px]:py-1 overflow-hidden font-medium max-[425px]:font-normal leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
                            <span className="absolute inset-0 w-full h-full px-5 py-3  max-[425px]:px-3 max-[425px]:py-2 rounded-lg bg-gray-50 "></span>
                            <span className="absolute left-0 w-48 h-48 max-[425px]:w-36 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F7AB0A] group-hover:-rotate-180 ease"></span>
                            <span className="relative">
                                Download
                            </span>
                        </span>
                        <span
                            className="absolute bottom-0 right-0 w-full h-12 max-[425px]:h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F7AB0A] rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                        ></span>
                    </a>

                </motion.div>
                <motion.div
                    variants={fadeIn('up', 'spring', 0.9, 0.85)}
                >
                    <span className="text-md mt-2 md:mt-8">Apartment Locator Questionnaire form(pdf)</span>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default Relocate 
