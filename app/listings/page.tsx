import ListingsList from "@/components/ListingsList";
import { groq } from 'next-sanity'
import { client } from "@/lib/sanity.client";


const query = groq`*[_type == 'listing']`;


const Listings = async () => {
    
    const listings = await client.fetch(query)
    console.log(listings)
    
    return(
        <ListingsList listings={listings} />
    )
}

export default Listings;