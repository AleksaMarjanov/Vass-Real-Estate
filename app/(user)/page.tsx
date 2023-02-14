import { previewData } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from '../../components/PreviewSuspense'
import Image from "next/image";
// import About from '../../components/About'
// import { PageInfo } from "@/typings";
// import fetchPageInfo from "@/utils/fetchPageInfo";


const HomePage = () => {
  // if(previewData()) {
  //   return (
  //     <PreviewSuspense fallback={(
  //       <div role="status">
  //         <p className="text-center text-lg animate-pulse text-white">
  //           Loading Preview Data...
  //         </p>
  //       </div>
  //     )}>

  //     </PreviewSuspense>
  //     )
  // }

  return(
  <div className="object-cover w-full">
    <Image src="/public/vassHero.webp" alt="hero" width={1200} height={2000} priority />
  </div>
  
  ) 
}

export default HomePage;

