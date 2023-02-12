"use client";

type Props = {
   listings : Listing[];
}

const ListingsList = ({ listings } : Props) => {
  console .log(listings.length)
  
  return (
    <div>123</div>
  )
}

export default ListingsList