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
      className={`sm:px-16 px-3 py-2 `}
      >
      <div className='w-full mx-auto flex items-center justify-between gap-8 py-5 left-0 top-0 '>
      <Link href='/' className='cursor-pointer hover:opacity-60 transition-all ease-in-out duration-700'>
        <Image 
        src="/logoSvg.svg"
        alt="logo"
        width={150}
        height={150}
        priority
        />
      </Link>
        <ul className='hidden md:flex flex-1 relative items-center justify-center list-none space-x-6'>
        {['listings', 'projects', 'transactions', 'about'].map((item, index) => (
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
                        : "text-darker-white opacity-70 bg-left-bottom bg-gradient-to-r from-[#F7AB0A] to-[#F7AB0A] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    } uppercase no-underline font-bold`}
                  >
                    {item}
                  </a>
                </li>
                </div>
        ))}
     <a href="/contact" className="relative inline-block text-lg group mb-10 mt-10">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute right-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-left rotate-90 translate-x-full translate-y-12 bg-[#F7AB0A]  group-hover:rotate-180 ease"></span>
          <span className="relative">
            Contact
          </span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12  -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F7AB0A]  rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>
        </ul>
      </div>
      </motion.nav>
    )
}

export default Navbar