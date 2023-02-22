"use client";

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { useCallback, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';



const OurServices = () => {

  const [services, setServices] = useState([])
  const [filterServices, setFilterServices] = useState([])
  const [activeFilter, setActiveFilter] = useState('Residential');
  const [animateCard, setAnimateCard ] = useState({ y: 0, opacity: 1 });

const query = groq`
  *[_type == 'services']
`

useEffect(() => {
  const fetchServices = async () => {
    const services = await client.fetch(query)
    setServices(services)
    setFilterServices(services)
  }
  
  fetchServices()
}, [])

const handleServiceFilter = (item : any) => {
  setActiveFilter(item);
  // @ts-ignore
  setAnimateCard([{ x: 100, opacity: 0 }]);
  
  setTimeout(() => {
    // @ts-ignore
    setAnimateCard([{ x: 0, opacity: 1 }]);
    if (item === "All") {
      setFilterServices(services);
    } else {
      // @ts-ignore
      setFilterServices(services.filter((service) => service.tags.includes(item)));
    }
  }, 800);
};

  return (
    <div className="bg-[#0086bb]/20  max-[768px]:rounded-tl-[160px] rounded-tl-[360px]">
      <ServiceCard services={services} filterServices={filterServices} handleServiceFilter={handleServiceFilter} activeFilter={activeFilter} animateCard={animateCard}/>
    </div>
  );
};

export default OurServices;
