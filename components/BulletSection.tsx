import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { groq } from "next-sanity";
import BulletList from "./bulletList";


const query = groq`
*[_type == 'bulletSection']
`

const BulletSection = async () => {

  const bullets = await client.fetch(query)

  return (
    <BulletList bullets={bullets}/>
  );
};

export default BulletSection;
