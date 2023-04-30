"use client";


import { urlFor } from '../lib/urlFor'
import Image from "next/image";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, slideIn } from '@/utils/motion';
import { Transactions } from '@/typings'
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from './RichTextComponents';

type Props = {
    transactions: Transactions[]
}


const TransactionList = ({ transactions }: Props) => {
    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])

    if (isSSR) return null;

    console.log('transactions', { transactions })

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div className="flex items-center justify-center"
                variants={fadeIn('up', 'tween', 0.2, 0.6)}
            >
                <h2 className="font-bold text-2xl md:text-4xl">Transactions</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24 mt-6">
                {transactions.map(transaction => (
                    <motion.div
                        variants={fadeIn("up", "tween", 0.5, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col cursor-pointer"
                        key={transaction._id}
                    >

                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image
                                className="object-cover object-left lg:object-center rounded-lg"
                                src={urlFor(transaction.mainImage).url()}
                                alt={transaction.title}
                                fill
                                priority
                            />
                            <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                                <div>
                                    <p className='font-bold max-[768px]:text-[14px]'>{transaction.title}</p>
                                </div>

                                <div className="flex flex-col md:flex-row gap-x-2 md:gap-x-4 items-center">
                                    {transaction.categories.map(category => (
                                        <div key={category._id}>
                                            <p className="font-bold text-sm md:text-xl" >{category.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='mt-5 flex-1'>
                            <p className='text-white line-clamp-6'>
                                <PortableText value={transaction.body} components={RichTextComponents} />
                            </p>
                        </div>
                    </motion.div>
                ))
                }
            </div >
        </motion.div >
    )
}

export default TransactionList;
