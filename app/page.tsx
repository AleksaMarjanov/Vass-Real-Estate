import { Hero, Testimonials, FAQ, BulletSection, ServiceCard, TrustedBy, Relocate } from '@/components'


const HomePage = () => {

    return (
        
        <main className="">
            <section id="hero">
                <Hero />
            </section>
            <section id="bulletsection">
                <BulletSection />
            </section>
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




