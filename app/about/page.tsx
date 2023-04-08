import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';
import { PageInfo } from '../../typings'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import AboutList from '@/components/AboutList';

// fetch about information and socials from sanity
const query = groq`
  *[_type=='pageInfo'][0]
  `;
const socialQuery = groq`
  *[_type=='social']
  `;

export const revalidate = 60;

const About = async () => {

    const pageInfo = await client.fetch(query)
    const socials = await client.fetch(socialQuery)

    return (
        <div className="relative z-0">
            <AboutList pageInfo={pageInfo} socials={socials} />
        </div>
    )
}

export default About;
