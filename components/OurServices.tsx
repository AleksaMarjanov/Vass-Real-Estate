"use client";

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const OurServices = () => {

  const [services, setServices] = useState([])
  const [filterServices, setFilterServices] = useState([])
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0)

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
  setActiveFilter(item);

  setTimeout(() => {

    if (item === "All") {
      setFilterServices(services);
    } else {
      // @ts-ignore
      setFilterServices(services.filter((service) => service.tags.includes(item)));
    }
  }, 500);
};

  return (
    <div className="bg-[#0086bb]/20">
      <ServiceCard services={services} filterServices={filterServices} handleMenusFilter={handleMenusFilter} activeFilter={activeFilter}/>
    </div>
  );
};

export default OurServices;
