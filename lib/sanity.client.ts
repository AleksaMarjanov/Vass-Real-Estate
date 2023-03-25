import sanityClient from "@sanity/client";


// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const projectId = '8m2psc99'
const dataset = 'production'
const apiVersion = '2021-11-15'

export const client = sanityClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

