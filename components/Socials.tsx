"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import styles from "@/styles";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Social } from "@/typings";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {
    socials: Social[];
};

export const revalidate = 60;

const Socials = () => {
    const [socials, setSocials] = useState([])
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const query = groq`
*[_type == 'social']
`

    {/* Error Occured when switching layout.tsx from SSC to Client Side,To Fix This Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead. 

  fetching data inside useEffect that will load only once having dependency array empty

*/}

    useEffect(() => {
        try {
            const fetchData = async () => {
                let socials = await client.fetch(query);
                setSocials(socials)
            }
            // call the function
            fetchData()
        } catch (err) {
            (console.error)
        }
    }, [])


    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.xPaddings} py-8`}
        >
            <div className="mb-[50px] h-[2px] bg-white opacity-10" />

            <div className="flex flex-col">
                <div className="flex items-center justify-between flex-wrap gap-6 md:gap-8">
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <a href="#nav" className="cursor-pointer">
                            <Image
                                src="/logoSvg.svg"
                                alt="Vass Real Estate Logo"
                                width={300}
                                height={300}
                                priority
                            />
                        </a>
                        <div className="font-normal text-[14px] text-white ">
                            <p className="opacity-50">
                                Copyright © {new Date().getFullYear()} Vass Real Estate Solutions.
                                All Rights Reserved
                            </p>
                            <p>
                                <a href="https://marjanovdesignsolutions.com/">
                                    <span className="text-[#F7AB0A]"> Developed by Marjanov Design Solutions</span></a>
                            </p>

                        </div>
                    </div>
                    {!isFormSubmitted ? (
                        <div className="flex items-center justify-center text-primary-black">
                            <form>
                                <input type="text" placeholder="johndoe@gmail.com" />
                            </form>
                        </div>
                    ) : (
                        <div>
                            Thank you!
                        </div>
                    )}
                    <div className="flex gap-4">
                        {socials.map((social: Social) => (
                            <div
                                className="group"
                                key={social._id}
                            >
                                <SocialIcon
                                    url={social.url}
                                    fgColor="white"
                                    className="group-hover:bg-slate-700 rounded-full transition-all ease-in-out duration-700"
                                    bgColor="transparent"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer >
    );
};

export default Socials;
