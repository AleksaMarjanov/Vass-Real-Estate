import ListingsList from "@/components/ListingsList";
import { groq } from 'next-sanity'
import { client } from "@/lib/sanity.client";
import PreviewSuspense from '../../components/PreviewSuspense'
import { previewData } from "next/headers";

const query = groq`
*[_type=='listing'] {
    ...,
    author->,
    categories[]->,
    path->
} | order(_createdAt desc)
`;

const Listings = async () => {
    
    if(previewData()) {
      return (
        <PreviewSuspense fallback={(
          <div role="status">
            <p className="text-center text-lg animate-pulse text-white">
              Loading Preview Data...
            </p>
          </div>
        )}>
  
        </PreviewSuspense>
        )
    }
    const listings = await client.fetch(query)
    return(
            <ListingsList listings={listings} />
    ) 
  }


export default Listings;