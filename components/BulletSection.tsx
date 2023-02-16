"use client";

import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'

const BulletSection = () => {
  return (
        <section id="bulletsection" className={`${styles.xPaddings} w-full flex flex-row space-x-6 px-6 mt-24
        max-[768px]:flex-col items-center justify-center bg-[#0086bb]/20 h-[300px] text-white`}>
            <div className="flex items-center justify-center flex-col">
                <h2>Client-Centered Approach</h2>
                <p className="text-[12px]">Deano Vass Real Estate takes a client-centered approach to every transaction, prioritizing the needs and preferences of each individual client.</p>
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2>Trusted Expertise</h2>
                <p className="text-[12px]">With years of experience and a comprehensive understanding of the local market, Deano Vass Real Estate is a trusted expert in the real estate industry.</p>
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2>Result-Driven Strategies</h2>
                <p className="text-[12px]">Our team of professionals utilizes results-driven strategies to help clients achieve their real estate goals, with a focus on maximizing value and minimizing risk.</p>
            </div>
        </section>
    )
}

export default BulletSection