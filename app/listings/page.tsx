import ListingsList from "@/components/ListingsList";
import { groq } from 'next-sanity'
import { client } from "@/lib/sanity.client";
import PreviewSuspense from '../../components/PreviewSuspense'
import { previewData } from "next/headers";

// Get All Listings Data
const query = groq`
*[_type=='listing'] {
    ...,
    author->,
    categories[]->,
} | order(_createdAt desc)
`;

const Listings = async () => {

    const listings = await client.fetch(query)

    return (
        <ListingsList listings={listings} />
    )
}


export default Listings;
