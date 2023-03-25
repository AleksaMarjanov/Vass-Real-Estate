import styles from "@/styles";
import { Hero, BulletSection, ServiceCard, TrustedBy, Relocate } from '@/components'
import FAQ from "@/components/faq";
import Testimonials from "@/components/Testimonials";


const HomePage = () => {

    return (

        <main className="">
            <section id="hero">
                <Hero />

            </section>
            <section id="bulletsection">
                <BulletSection />
            </section>
            {/* Work around TypeScript Error Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key `ts(2786)`, workaround that is to use @ts-expect-error Server Component */}
            <section id="trusted">
                <TrustedBy />
            </section>
            <section id="services">
                <ServiceCard />
            </section>
            <section>
                <FAQ />
            </section>
            <section id="testiomnials" >
                <Testimonials />
            </section>
            <section>
                <Relocate />
            </section>
        </main>
    )
}

export default HomePage;

