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
      console.log(services, "dasdasdasdsadas");
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
      className={`${styles.innerWidth} max-[425px]:mt-6  mt-12 flex flex-col items-center justify-center `}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.85)}
          className="text-center"
        >
          <h3 className="text-2xl mt-12 max-[425px]:mt-4 max-[425px]:px-12">
            What we do
          </h3>
          <p className="max-[425px]:text-[14px] max-[425px]:mx-6 ">
            offers buying/selling, management, market analysis, investment
            consulting, and client service{" "}
          </p>
          <div className="flex-1 w-full flex-col md:flex-row ">
            <div className="flex flex-row flex-wrap justify-center items-center md:mt-16 mt-2 px-3 mr-0 md:mb-8">
              {["Property Managment", "Residential", "Apartment Locator"].map(
                (item, index) => (
                  <div
                    key={index}
                    onClick={() => handleServiceFilter(item)}
                    className={`md:pt-2 pt-1 mr-2 md:pr-4 m-2 bg-[#F7AB0A] rounded-[5px] md:text-lg text-sm text-white font-semibold cursor-pointer transition-all animate ease-in duration-300 hover:bg-nice-blue hover:text-white flex justify-center items-center ${
                      activeFilter === item
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
                className="w-270 flex-col md:flex-row md:m-8 md:p-4 rounded-lg  cursor-pointer transition-all animate ease-in duration-300 hover:shadow-xl flex justify-center items-center"
                key={index}
              >
                <div className="p-2 md:max-w-[550px] max w-full flex flex-col items-left justify-left text-left md:px-12 md:mx-12">
                  {/* <h4 className="font-bold">{service.title}</h4> */}
                  <PortableText
                    value={service.body}
                    components={RichTextComponents}
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
