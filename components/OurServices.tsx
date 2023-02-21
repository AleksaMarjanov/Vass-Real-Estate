"use client";

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const OurServices = () => {

  const [services, setServices] = useState([])
  const [filterServices, setFilterServices] = useState([])
  const [activeFilter, setActiveFilter] = useState('Industrial');
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
}, [query])

const handleMenusFilter = (item : any) => {
  // @ts-ignore
  setAnimateCard([{ x: 100, opacity: 0 }]);
  setActiveFilter(item);

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
    <div className="bg-[#0086bb]/20 ">
      <ServiceCard services={services} filterServices={filterServices} handleMenusFilter={handleMenusFilter} activeFilter={activeFilter} animateCard={animateCard}/>
    </div>
  );
};

export default OurServices;
