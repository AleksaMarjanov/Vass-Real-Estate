import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import Link from "next/link";
import { Listing } from "@/typings";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

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
  const query = groq`
		*[_type == "listing" && slug.current == $slug][0] {
			...,
			author->,
			categories[]->,
		}
	`;

  const listing: Listing = await client.fetch(query, { slug });


    
    return (
      <article className="px-10 pb-28 mt-5">
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
                    {listing.categories.map(( category) => (
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
        <div className="text-left mt-16 flex items-center justify-center flex-col">
        <PortableText value={listing.body} components={RichTextComponents}/>
        </div>        
      </article>
  );
};

export default Listing;
