'use client';

import "../../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { Navbar, Footer } from "@/components";

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
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className={`${montserrat.className}  bg-secondary-blue text-white mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
