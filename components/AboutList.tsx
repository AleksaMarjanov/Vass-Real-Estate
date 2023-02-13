"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";
import { urlFor } from "@/lib/urlFor";
import Image from "next/image";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const AboutList = ({ pageInfo }: Props) => {

    console.log(pageInfo)

  return (
    <div>
      <h1 className="text-white text-2xl flex items-center justify-center">
        About Info
      </h1>
      <p className="flex items-center justify-center text-2xl text-white">{pageInfo.backgroundInformation}</p>
      <p>{pageInfo._id}</p>
      <p>{pageInfo.phoneNumber}</p>
      <p>{pageInfo.name}</p>
    </div>
  );
};

export default AboutList;
