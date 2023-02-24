"use client";


import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { Navbar, Footer } from "@/components";
import { usePathname } from "next/navigation";
import { Metadata } from 'next';


export const metadata = {
  title: 'Vass Real Estate Solutions - Real Estate, Property Managment',
  description: 'Deano Vass Real Estate is a full-service broker company based in Williston, North Dakota, that specializes in providing exceptional residential and commercial real estate services, property management, market analysis, and investment consulting. With a commitment to exceptional client service, local expertise, and innovative use of technology, Deano Vass Real Estate is a trusted expert in the local real estate industry. For more information about their services, please contact them at (701)572-1111',
  keywords: ['Real estate','Broker','Property management','Market analysis','Investment consulting','Residential,Commercial','Williston','North Dakota','Client-centered','Local expertise','Innovative technology','Trusted expert','Exceptional service','Negotiation','Property value','Commission','Timeline','Listings','Buyers','Sellers','Property search','Comparative analysis','Offers','Closing process','Marketing','Promotion','Advocacy','Resources']
}



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
  // const pathname = usePathname()
    
  // useEffect(() => {
  //     document.scrollingElement?.scroll(0, 0)
  // }, [pathname])
  
  // useEffect(() => {
  //     setTimeout(() => {
  //         document.scrollingElement?.scrollTo(0, 0)
  //     }, 50)
  //     setTimeout(() => {
  //         document.scrollingElement?.scrollTo(0, 0)
  //     }, 100)
  //     setTimeout(() => {
  //         document.scrollingElement?.scrollTo(0, 0)
  //     }, 200)
  // }, [])

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
