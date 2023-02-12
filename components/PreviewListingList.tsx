"use client";

import { usePreview } from '../lib/sanity.preview'
import ListingList from './ListingsList'


type Props = {
    query: string;
}

export default function PreviewListingList({ query }: Props) {
    const listings = usePreview(null, query)
    return <ListingList listings={listings}/>
}