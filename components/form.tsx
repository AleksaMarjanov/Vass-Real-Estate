"use client";

import React, { useRef, useState } from "react";


const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = React.useRef<HTMLFormElement | null>()

  const handleSubmit = () => {};

  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
    <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
            <input  className="border shadow-lg p-3" type="text" placeholder="Name"/>
            <input  className="border shadow-lg p-3" type="email" placeholder="Email"/>
        </div>
        <input className="border shadow-lg p-3 w-full my-2"  type="text" placeholder="Subject" />
        <textarea className="border shadow-lg p-3 w-full"  placeholder="Message" id="" cols={30} rows={10} />
        <button type="submit"  className="shadow px-2 py-2 w-full bg-nice-blue hover:bg-[#F7AB0A] focus:ring-white transition-all ease-in-out duration-300 rounded-[5px]">Submit</button>
    </form>
    </div>

    // <div className="flex flex-col items-center justify-center w-full">
    //   <form ref={form} onSubmit={handleSubmit} className="gap-6 w-[50%]">
    //     <div className="py-2 px-2 focus:ring-blue-500  flex flex-col text-primary-black">
    //       <label htmlFor="name">Name</label>
    //       <input
    //         name="name"
    //         onChange={() => {}}
    //         placeholder="Name"
    //         aria-describedby="Name"
    //         required
    //       />
    //     </div>
    //     <div className="py-2 px-2 focus:ring-blue-500 flex flex-col text-primary-black">
    //       <label htmlFor="email">E-mail</label>
    //       <input
    //         name="email"
    //         onChange={() => {}}
    //         placeholder="email"
    //         aria-describedby="email"
    //         required
    //       />
    //     </div>
    //     <div className="w-[320px] flex-col flex">
    //       <label htmlFor="subject">Subject</label>
    //       <textarea name="subject" className="text-primary-black"></textarea>
    //     </div>
    //     <button
    //       className="px-2 py-2 bg-nice-blue hover:bg-[#F7AB0A] focus:ring-white transition-all ease-in-out duration-300 rounded-[5px]"
    //     >
    //       Send
    //     </button>
    //   </form>
    // </div>
  );
};

export default Form;
