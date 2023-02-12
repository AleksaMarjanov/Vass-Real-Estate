import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = ({source} : any) => builder.image(source);
