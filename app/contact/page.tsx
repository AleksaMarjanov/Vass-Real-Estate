import Form from "@/components/form";
import { Heading } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

const MapWithNOSSR = dynamic(() => import("../../components/MapForContact"), {
  ssr: false,
});


const Contact = () => {
    return(
        <div className="flex flex-col items-center justify-center mx-auto h-screen">
            <div className="w-full">
            <Form />
            </div>
            <div className="relative mt-2 z-[0]  max-[425px]:h-[40vh] lg:w-[40%] h-[45vh] md:w-[60%] max-[425px]:w-full max-[425px]:px-2 no-repeat">
                <MapWithNOSSR />
             </div>
        </div>
    )
}

export default Contact;