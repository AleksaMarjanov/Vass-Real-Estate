"use client";

import {
  Button,
  ButtonGroup,
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
import { PhoneIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";
import emailjs from "@emailjs/browser";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

type Props = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const FormListing = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isSSR, setIsSSR] = useState<boolean>(true)
  const form = useRef<HTMLFormElement>(null)
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<Props>({});
  
  const { isLoading, error, values } = state;
  
  const onBlur = (event: { target : HTMLInputElement } ) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (event: { target: HTMLInputElement }) =>

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const sendEmail = () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      emailjs.sendForm(
        // TODO: getting an error here with emailjs
        // @ts-ignore
        process.env.emailJs_service,
        process.env.emailJs_template,
        form.current,
        process.env.emailJs_API
      );
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
      setTimeout(() => {
        setIsFormSubmitted(true);
      }, 1500);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        // TODO: Getting error type of unknown
        // @ts-ignore
        error: error.message,
      }));
    }
  };


  // * Added SSR to be false, client component gives hydration errors!!
  useEffect(() => {
    setIsSSR(false)
  }, [])

  if(isSSR) return null;

  return (
    <ChakraProvider>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-[1240px] m-auto p-4">
      <motion.div
        variants={fadeIn('right', 'tween', 0.35, 0.8)}
      >
        {!isFormSubmitted ? (
          <motion.div
          className="flex flex-col items-center justify-center">
           <div className="w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-1 max-[1024px]:flex-[0.75]"
            >
              <Container maxW="850px" mt={12} className="text-white">
                {error && (
                  <Text color="#F7AB0A" my={4} fontSize="xl">
                    {error}
                  </Text>
                )}

                <FormControl
                  isRequired
                  // @ts-ignore
                  isInvalid={touched.name  && !values.name}
                  mb={5}
                >
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    errorBorderColor="red.300"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  // @ts-ignore
                  isInvalid={touched.email && !values.email}
                  mb={5}
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    errorBorderColor="red.300"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl
                  mb={5}
                  isRequired
                  // @ts-ignore
                  isInvalid={touched.subject && !values.subject}
                >
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type="text"
                    name="subject"
                    errorBorderColor="red.300"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  // @ts-ignore
                  isInvalid={touched.message && !values.message}
                  mb={5}
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    type="text"
                    name="message"
                    rows={4}
                    errorBorderColor="red.300"
                    value={values.message}
                    // @ts-ignore
                    onChange={handleChange}
                    // @ts-ignore
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <Button
className="hover:bg-slate-700"
variant="outline"
                  colorScheme="white"
                  isLoading={isLoading}
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.subject ||
                    !values.message
                  }
                  onClick={sendEmail}
                >
                  Submit
                </Button>
              </Container>
            </form>
      </div>
          </motion.div>
          ) : (
            <motion.div
            variants={textVariant(1.2)}
            className="flex flex-col items-center justify-center text-white h-screen">
              <h2 className="font-poppins text-[32px] max-[425px]:text-[18px] max-[425px]:p-3 h-screen">
                Thank you for getting in touch with us!
                <br />
                Someone will be reaching out to you
                <br />
                as soon as possible from our team
                <br />
              </h2>
            </motion.div>
          )}
    {/* <form ref={form} className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
            <input  className="border shadow-lg p-3" type="text" placeholder="Name"/>
            <input  className="border shadow-lg p-3" type="email" placeholder="Email"/>
        </div>
        <input className="border shadow-lg p-3 w-full my-2"  type="text" placeholder="Subject" />
        <textarea className="border shadow-lg p-3 w-full"  placeholder="Message" id="" cols={30} rows={10} />
        <button type="submit"  className="shadow px-2 py-2 w-full bg-nice-blue hover:bg-[#F7AB0A] focus:ring-white transition-all ease-in-out duration-300 rounded-[5px]">Submit</button>
    </form> */}
      </motion.div>
    </motion.div>
    </ChakraProvider>
  );
};

export default FormListing;
