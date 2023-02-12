'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion';
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  const [navbar, setNavbar] = useState()


  return (
      <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`sm:px-16 px-3 py-2 bg-secondary-black`}
      >
      <div className='w-full mx-auto flex items-center justify-between gap-8 py-5 left-0 top-0 '>
      <Link href='/' className='cursor-pointer hover:opacity-60 transition-all ease-in-out duration-700'>
        <Image 
        src="/logoSvg.svg"
        alt="logo"
        width={300}
        height={300}
        priority
        />
      </Link>
        <ul className='hidden md:flex flex-1 relative items-center justify-center list-none space-x-6'>
        {['listings', 'projects', 'transactions', 'about', 'contact'].map((item, index) => (
          <div
                    key={item + index}
                    >
                        <li
                        className='mt-0 cursor-pointer flex flex-col items-center justify-center group list-none'
                        key={`${item}`}
                        >
                  <a
                    href={`/${item}`}
                    className={`${
                      navbar
                        ? "text-white group-hover:text-coffee-yellow"
                        : "text-darker-white opacity-70 bg-left-bottom bg-gradient-to-r from-nice-blue to-nice-blue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    } uppercase no-underline font-bold`}
                  >
                    {item}
                  </a>
                </li>
                </div>
        ))}
        </ul>
      </div>
      </motion.nav>
    )
}

export default Navbar