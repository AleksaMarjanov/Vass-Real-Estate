
import styles from "@/styles";
<<<<<<< HEAD
import { Hero, BulletSection, OurServices, TrustedBy, FAQ, Testimonials } from '@/components'
=======
import { Hero, BulletSection, OurServices, TrustedBy } from '@/components'
import FAQ from "@/components/faq";
import Testimonials from "@/components/Testimonials";
>>>>>>> 837ba2fabc6989625568ed57842dd4bab3dd18e0


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
<<<<<<< HEAD
      <section className="">
        <FAQ />
      </section>
      <section>
        <Testimonials />
      </section>
=======
       <section>
      <FAQ />
      </section>
      <section id="testiomnials">
        <Testimonials />
      </section> 
>>>>>>> 837ba2fabc6989625568ed57842dd4bab3dd18e0
    </main>
  ) 
}

export default HomePage;

