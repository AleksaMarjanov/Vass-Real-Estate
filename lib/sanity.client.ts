import sanityClient from "@sanity/client";


export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION


export const client = sanityClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

