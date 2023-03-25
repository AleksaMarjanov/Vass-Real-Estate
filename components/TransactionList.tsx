"use client";


import { urlFor } from '../lib/urlFor'
import Image from "next/image";
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, slideIn } from '@/utils/motion';
import { Transactions } from '@/typings'

type Props = {
    transactions: Transactions[]
}


const TransactionList = ({ transactions }: Props) => {

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
                        className="group flex flex-col cursor-pointer"
                        key={transaction._id}
                    >

                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image
                                className="object-cover object-left lg:object-center rounded-lg"
                                src={urlFor(transaction.imgurl).url()}
                                alt="Transaction"
                                fill
                                priority
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default TransactionList;
