import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import ServiceCard from './ServiceCard';

const OurServices = async () => {

const query = groq`
  *[_type == 'services']
`

const services = await client.fetch(query)

  return (
    <div className="bg-[#0086bb]/20">
      <ServiceCard services={services} />
    </div>
  );
};

export default OurServices;
