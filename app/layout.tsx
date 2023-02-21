"use client";


import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { Navbar, Footer } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

{/* Solution 1. Fixing error of not scrolling to the top of the page, [slug]/page.tsx top div has id of scroll-top */}

  // const pathname = usePathname();
  // useEffect(() => {
  //   document
  //     .getElementById("scroll-top")
  //     ?.scrollIntoView({ behavior: "smooth" });
  // }, [pathname]);

{/* Solution 2.  Fixing error of not scrolling to the top of the page, [slug]/page.tsx top div has id of scroll-top */}
  const pathname = usePathname()
    
  useEffect(() => {
      document.scrollingElement?.scroll(0, 0)
  }, [pathname])
  
  useEffect(() => {
      setTimeout(() => {
          document.scrollingElement?.scrollTo(0, 0)
      }, 50)
      setTimeout(() => {
          document.scrollingElement?.scrollTo(0, 0)
      }, 100)
      setTimeout(() => {
          document.scrollingElement?.scrollTo(0, 0)
      }, 200)
  }, [])

  return (

    <html lang="en">
      <body className={`${montserrat.className} bg-[#121a34] text-white `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 
