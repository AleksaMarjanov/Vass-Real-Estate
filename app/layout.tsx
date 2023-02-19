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

  const pathname = usePathname();
  {/* Fixing error of not scrolling to the top of the page, [slug]/page.tsx top div has id of scroll-top */}
  useEffect(() => {
    document
      .getElementById("scroll-top")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

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
