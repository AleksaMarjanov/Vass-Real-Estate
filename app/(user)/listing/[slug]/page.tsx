import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import Link from "next/link";
import { Listing } from "@/typings";
import Map from "@/components/Map";
import FormListing from "@/components/formListing";


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60; // revalidate this page every 60 seconds

// get dynamic params for each listing
export async function generateStaticParams() {
    const query = groq`
		*[_type == "listing"]
		{
			slug
		}
		`;
    const slugs: Listing[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,
    }));
}

async function Listing({ params: { slug } }: Props) {
    // fetch data for only listing that is active/clicked
    const query = groq`
		*[_type == "listing" && slug.current == $slug][0] {
			...,
			author->,
			categories[]->,
		}
	`;

    const listing: Listing = await client.fetch(query, { slug });



    return (
        <>
            <article className="px-10 pb-28 mt-5" id="scroll-top">
                <a href="/listings" className="relative inline-block text-lg group mb-10 mt-10">
                    <span className="relative z-10 block px-5 py-3 max-[425px]:px-3 max-[425px]:py-1 overflow-hidden font-medium max-[425px]:font-normal leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
                        <span className="absolute inset-0 w-full h-full px-5 py-3  max-[425px]:px-3 max-[425px]:py-2 rounded-lg bg-gray-50 "></span>
                        <span className="absolute left-0 w-48 h-48 max-[425px]:w-36 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F7AB0A] group-hover:-rotate-180 ease"></span>
                        <span className="relative">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 mr-2 inline-flex"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Go back
                        </span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 max-[425px]:h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F7AB0A] rounded-lg group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-lg"
                    ></span>
                </a>
                <section className="space-y-2 border-[#F7AB0A] text-white">
                    <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                        <div className="absolute top-0 w-full h-full opacity-30 blur-sm p-10">
                            <Image
                                className="object-cover object-left lg:object-center"
                                src={urlFor(listing.mainImage).url()}
                                alt={listing.author.name}
                                fill
                            />
                        </div>
                        <section className="p-5 bg-darker-white text-primary-black w-full">
                            <div className="flex flex-col md:flex-row justify-between gap-y-5 ">
                                <div>
                                    <h1 className="text-4xl font-extrabold">{listing.title}</h1>
                                    <p className="">
                                        {new Date(listing._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <Link href="/about" className="cursor-pointer relative z-[20]">
                                        <Image
                                            className="rounded-full"
                                            src={urlFor(listing.author.image).url()}
                                            alt={listing.author.name}
                                            height={40}
                                            width={40}
                                        />
                                    </Link>

                                    <div className="w-64">
                                        <h3 className="text-lg font-bold">{listing.author.name}</h3>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {/* <h2 className="italic pt-10 text-primary-black">{listing.description}</h2> */}
                                <div className="flex items-center justify-end mt-auto space-x-2">

                                    <div>
                                        {listing.categories.map((category) => (
                                            <div key={category._id} >
                                                <p>
                                                    {category.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <div className="w-full flex items-center justify-center mt-6">
                    <Image
                        className="object-cover object-left lg:object-center rounded-[10px] "
                        src={urlFor(listing.mainImage).url()}
                        alt={listing.author.name}
                        width={1000}
                        height={1000}
                        priority
                    />
                </div>
                {/* <div className="md:flex-row flex flex-col w-full px-6 max-[425px]:px-0"> */}
                <div className="text-left mt-16 flex items-center  justify-center flex-col">
                    <h3 className="flex items-left justify-left font-thin text-xl">Overview:</h3>
                    <PortableText value={listing.body} components={RichTextComponents} />
                </div>
                {/* </div> */}
                <div className="flex flex-col items-center justify-center md:mt-32 max-[768px]:mt-16">
                    <div>
                        <p className="text-lg items-left justify-left ">Map</p>
                        <hr className="border-[#F7AB0A] mb-10 w-[40px]" />
                    </div>
                    <Map listing={listing} />
                </div>
                <div className="flex items-center justify-center">
                    <FormListing />
                </div>
            </article>
        </>
    );
};

export default Listing;
