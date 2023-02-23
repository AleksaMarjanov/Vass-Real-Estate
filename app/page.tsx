
import styles from "@/styles";
import { Hero, BulletSection, OurServices, TrustedBy, FAQ, Testimonials } from '@/components'


const HomePage = () => {

  return(
        
    <main className="">
      <section id="hero">
      <Hero />

      </section>
      <section id="bulletsection">
        <BulletSection/>
      </section>
      {/* Work around TypeScript Error Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key `ts(2786)`, workaround that is to use @ts-expect-error Server Component */}
      <section id="trusted">
      <TrustedBy />
      </section>
      <section id="services" className="">
        <OurServices />
      </section>
      <section className="">
        <FAQ />
      </section>
      <section>
        <Testimonials />
      </section>
    </main>
  ) 
}

export default HomePage;

