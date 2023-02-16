import { previewData } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from '../../components/PreviewSuspense'
import Image from "next/image";
import styles from "@/styles";
import { Hero, BulletSection } from '@/components'


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
    <main className="items-center justify-center py-12">
      <section>
      <Hero />
      </section>
      <section>
        <BulletSection />
      </section>      
    </main>
  ) 
}

export default HomePage;

