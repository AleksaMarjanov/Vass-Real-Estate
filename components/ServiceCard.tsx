"use client";

import styles from "@/styles";
import { slideIn, staggerContainer, textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Services } from "@/typings";
import { useEffect, useState } from "react";
import { urlFor } from "@/lib/urlFor";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
    service: Services;
};

export const revalidate = 60;

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    const [filterServices, setFilterServices] = useState([]);
    const [activeFilter, setActiveFilter] = useState("Property Managment");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const query = groq`
  *[_type == 'services']
`;


    useEffect(() => {
        const fetchServices = async () => {
            const services = await client.fetch(query);
            setServices(services);
            setFilterServices(services);
            // Have to fix types of services tags doesn't exist on type Props
            // @ts-ignore
            setFilterServices(services.filter((service: service) =>
                service.tags.includes(activeFilter)
            )
            );
        };
        fetchServices();
    }, []);

    const handleServiceFilter = (item: string) => {
        setActiveFilter(item);
        // @ts-ignore
        setAnimateCard([{ x: "-100%", opacity: 0 }]);

        setTimeout(() => {
            // @ts-ignore
            setAnimateCard([{ x: 0, opacity: 1 }]);
            if (item === "All") {
                setFilterServices(services);
            } else {
                // @ts-ignore
                setFilterServices(services.filter((service) => service.tags.includes(item))
                );
            }
        }, 600);
    };

    const itemActive =
        "  border-nice-blue bg-nice-blue px-3 py-2 rounded sm:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-white";

    const notActiveItem =
        "px-3 py-2 rounded sm:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-black";

    return (
        <section
            className={`${styles.innerWidth} mt-12 md:mt-24 flex flex-col items-center justify-center `}
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={fadeIn("up", "tween", 0.8, 0.85)}
                    className="text-center max-[425px]:py-12"
                >
                    <h1 className="font-bold text-2xl md:text-4xl">Services</h1>
                    <h2 className="text-2xl mt-2 md:mt-6  max-[425px]:px-12">
                        What we do
                    </h2>

                    {/*     offers buying/selling, management, market analysis, investment */}
                    {/*     consulting, and client service{" "} */}
                    {/* </p> */}
                    <div className="flex-1 flex-col md:flex-row ">
                        {/* grid grid-cols-2 md:flex md:flex-row md:flex-wrap max-[425px]:px-12 py-4 justify-center items-center max-[768px]:mt-16 md:mt-2 px-3 mr-0 max-[768px]:mb-8 */}
                        <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-center items-center max-[768px]:mt-8  py-4 gap-1 px-3 md:mt-2 md:px-3 mr-0 max-[768px]:mb-8">
                            {["Property Managment", "Site Selection", "Apartment Locator", "Consulting", "Brokerage Sales/Leasing"].map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleServiceFilter(item)}
                                        className={`relative max-[425px]:w-full whitespace-nowrap text-elipsis overflow-hidden flex items-center justify-center pt-2 bg-[#F7AB0A] rounded-[5px] md:text-lg 
                    max-[375px]:text-[12px] text-[14px] text-white font-semibold cursor-pointer transition-all animate ease-in duration-300 hover:bg-nice-blue hover:text-white ${activeFilter === item
                                                ? `${itemActive}`
                                                : `${notActiveItem}`
                                            }`}
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <motion.div
                        animate={animateCard}
                        transition={{ type: "tween", duration: 0.5, delayChildren: 0.5 }}
                        className="flex flex-wrap justify-center items-center"
                    >
                        {filterServices.map((service: Services, index: number) => (
                            <div
                                className="w-270 flex-col lg:flex-row rounded-lg  cursor-pointer transition-all animate ease-in duration-300 hover:shadow-xl flex justify-center items-center"
                                key={index}
                            >
                                <div className="p-2 w-full lg:w-[550px] flex flex-col items-left  text-lg justify-left text-left md:px-12 md:mx-12">
                                    {/* <h4 className="font-bold">{service.title}</h4> */}
                                    <PortableText
                                        value={service.body}
                                        components={RichTextComponents}
                                    />
                                </div>
                                <div className="relative  object-contain lg:w-[350px] lg:h-[350px] w-[300px] h-[300px]  max-[425px]:w-[250px] max-[425px]:h-[250px] max-[375px]:w-[150px] max-[375px]:h-[150px] flex items-center justify-center">
                                    <Image
                                        src={urlFor(service.mainImage).url()}
                                        className="object-contain lg:object-center"
                                        alt={service.title}
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ServiceCard;
