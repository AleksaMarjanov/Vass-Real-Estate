import Form from "@/components/form";
import { Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const MapWithNOSSR = dynamic(() => import("../../components/MapForContact"), {
  ssr: false,
});

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto h-screen">
      <h1 className="md:text-2xl text-xl font-extrabold">Contact Us</h1>
            <p>Feel free to give us a call <span className="font-bold">anytime!</span></p>
            <p>We work when the oil field works</p>
            <p>24/7 Boots  on the ground</p>
      <div className="w-full">
        <Form />
      </div>
      <div>
        <h2>Vass Real Estate Solutions</h2>
        <p className="md:text-lg text-md font-normal" >417 1st Avenue East, Williston, North Dakota</p>
        <p className="md:text-lg text-md font-normal">58801, United States</p>
      </div>
      <div className="relative mt-2 z-[0]  max-[425px]:h-[40vh] lg:w-[40%] h-[45vh] md:w-[60%] max-[425px]:w-full max-[425px]:px-2 no-repeat">
        <MapWithNOSSR />
      </div>
    </section>
  );
};

export default Contact;
