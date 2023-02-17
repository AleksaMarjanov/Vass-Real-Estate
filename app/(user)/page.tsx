
import styles from "@/styles";
import { Hero, BulletSection } from '@/components'


const HomePage = () => {

  return(
    <main className="items-center justify-center py-12">
      <section id="hero">
      <Hero />
 
      </section>
      <section id="bulletsection">
        {/* Work around TypeScript Error Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key `ts(2786)`*/}
        {/* @ts-expect-error Server Component */}
        <BulletSection/>
      </section>      
    </main>
  ) 
}

export default HomePage;

