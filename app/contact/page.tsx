import Form from "@/components/form";
import dynamic from "next/dynamic";

// import react leaflet map dynamically
const MapWithNOSSR = dynamic(() => import("../../components/MapForContact"), {
    ssr: false,
});

const Contact = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full max-[768px]:mt-16">
            <div className="w-full">
                <Form />
            </div>
            <div className="relative z-[0] h-[60vh] max-[425px]:h-[40vh] w-[60%] max-[425px]:w-[85%] max-[425px]:px-2 no-repeat">
                <MapWithNOSSR />
            </div>
            <a href="https://www.google.com/maps/dir//417+1st+Ave+E,+Williston,+ND+58801/@48.1483174,-103.6909602,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x53215b5fdd79fa01:0x559f11122d7c7c9a!2m2!1d-103.6209205!2d48.1483387"
                target="_blank"
                className="relative inline-block text-lg group mb-10 mt-10"
                rel="noopener noreferrer">
                <span className="relative z-10 block px-5 py-3 max-[425px]:px-3 max-[425px]:py-1 overflow-hidden font-medium max-[425px]:font-normal leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3  max-[425px]:px-3 max-[425px]:py-2 rounded-lg bg-gray-50 "></span>
                    <span className="absolute left-0 w-48 h-48 max-[425px]:w-36 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F7AB0A] group-hover:-rotate-180 ease"></span>
                    <span className="relative">

                        Get Directions
                    </span>
                </span>
                <span
                    className="absolute bottom-0 right-0 w-full h-12 max-[425px]:h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F7AB0A] rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                ></span>
            </a>
        </section>
    );
};

export default Contact;
