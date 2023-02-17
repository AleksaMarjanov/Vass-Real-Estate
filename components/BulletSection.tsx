"use client";

import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'
import Image from 'next/image';

const BulletSection = () => {
  return (
        <section className={`w-full px-36 flex flex-row space-x-6 mt-24 max-[768px]:gap-12
        max-[768px]:flex-col items-center justify-center h-[300px] text-white `}>
            <div className="flex items-left justify-left flex-col space-y-4">
                <div className="flex flex-row items-left justify-left gap-3 ">
                <Image src='/clientApproach.svg' alt="clientApproach" width={30} height={30} priority />
                <h2>Client-Centered Approach</h2>
                </div>
                <p className="text-[12px] flex items-left justify-center">Deano Vass Real Estate prioritizes each client&apos;s needs and preferences in every transaction.</p>
            </div>
            <div className="flex items-left justify-left flex-col space-y-4">
            <div className="flex flex-row items-left justify-left gap-3">
                <Image src='/Asset 1.png' alt="" width={30} height={30} priority />
                <h2>Trusted Expertise</h2>
            </div>
                <p className="text-[12px] flex items-left justify-left">Deano Vass Real Estate is a trusted expert in the local real estate industry.</p>
            </div>
            <div className="flex items-left justify-left flex-col space-y-4">
            <div className="flex flex-row items-left justify-left gap-3">
                <Image src='/clientApproach.svg' alt="clientApproach" width={30} height={30} priority />
                <h2>Result-Driven Strategies</h2>
            </div>
                <p className="text-[12px] flex items-left justify-center">We use results-driven strategies to help clients achieve their real estate goals while minimizing risk.</p>
            </div>
        </section>
    )
}

export default BulletSection