import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';
import { PageInfo } from '../../typings'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import AboutList from '@/components/AboutList';

  const query = groq`
  *[_type=='pageInfo'][0]
  `;
  const socialQuery = groq`
  *[_type=='social']
  `;


const About =  async () => {
 const pageInfo = await client.fetch(query)
 const socials = await client.fetch(socialQuery)
//  console.log(pageInfo)
    return(
        <div className="flex flex-col items-center justify-center">
            {/* <About /> */}
         <AboutList pageInfo={pageInfo} socials={socials} />
        </div>
    )
}

export default About;