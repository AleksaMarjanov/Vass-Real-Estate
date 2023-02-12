"use client";

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';

const About = () => {
    return(
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        view
        >
            About
        </div>
    )
}

export default About;