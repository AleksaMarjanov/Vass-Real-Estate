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
const About =  async () => {
 const pageInfo = await client.fetch(query)
//  console.log(pageInfo)
    return(
        <div>
            {/* <About /> */}
         <AboutList pageInfo={pageInfo} />
        </div>
    )
}

export default About;