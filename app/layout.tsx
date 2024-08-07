"use client";


import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { Navbar, Socials, ViewTransition } from "@/components";
import { useEffect } from 'react'
import { usePathname } from "next/navigation";

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

    {/* Solution 1.  Fixing error of not scrolling to the top of the page, [slug]/page.tsx top div has id of scroll-top */ }
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
            <body className={`${montserrat.className} bg-[#121a34] text-white overflow-hidden`}>
               <Navbar/>
                {children}
                <Socials />
            </body>
        </html>
    );
} 
