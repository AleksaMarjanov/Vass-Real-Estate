"use client";

import styles from '@/styles';
import { slideIn, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';

const OurServices = () => {
  return (
    <section className={`${styles.innerWidth} relative flex items-center justify-center`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    >   
    <motion.div variants={slideIn('up', 'tween', 0.3, 0.85)}>
            <h3 className="text-5xl">OurServices</h3>
    </motion.div>
    </motion.div>
</section>
  )
}

export default OurServices