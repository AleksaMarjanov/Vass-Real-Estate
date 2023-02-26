"use client";

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from "@/utils/motion";


const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSSR, setIsSSR] = useState(true)
  const form = useRef<HTMLFormElement>(null)

  // * Added SSR to be false, client component gives hydration errors!!
  useEffect(() => {
    setIsSSR(false)
  }, [])

  if(isSSR) return null;


  const handleSubmit = () => {};

  return (
    <ChakraProvider>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-[1240px] m-auto p-4">
      <motion.div
        variants={slideIn('up', 'tween', 0.35, 0.8)}
      >
    <form ref={form} className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
            <input  className="border shadow-lg p-3" type="text" placeholder="Name"/>
            <input  className="border shadow-lg p-3" type="email" placeholder="Email"/>
        </div>
        <input className="border shadow-lg p-3 w-full my-2"  type="text" placeholder="Subject" />
        <textarea className="border shadow-lg p-3 w-full"  placeholder="Message" id="" cols={30} rows={10} />
        <button type="submit"  className="shadow px-2 py-2 w-full bg-nice-blue hover:bg-[#F7AB0A] focus:ring-white transition-all ease-in-out duration-300 rounded-[5px]">Submit</button>
    </form>
      </motion.div>
    </motion.div>
    </ChakraProvider>
  );
};

export default Form;
