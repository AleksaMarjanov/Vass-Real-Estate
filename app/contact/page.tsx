import Form from "@/components/form";
import { Heading } from "@chakra-ui/react";
import { PhoneIcon } from "@heroicons/react/24/solid";

import dynamic from "next/dynamic";

const MapWithNOSSR = dynamic(() => import("../../components/MapForContact"), {
  ssr: false,
});

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
        <Form />
        </div>
      <div className="relative z-[0] h-[60vh] max-[425px]:h-[40vh] w-[60%] max-[425px]:w-full max-[425px]:px-2 no-repeat">
        <MapWithNOSSR />
      </div>
    </section>
  );
};

export default Contact;
