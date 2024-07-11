import { Hero, Testimonials, FAQ, BulletSection, ServiceCard, TrustedBy, Relocate } from '@/components'


const HomePage = () => {

    return (
        <main classname="h-full justify-center items-center">
            <h1 classname="text-bold text-3xl">Website is under maintenance</h1>
            </main>
)
        }
export default HomePage;
       /* <main className="">
            <section id="hero">
                <Hero />

            </section>
            <section id="bulletsection">
                <BulletSection />
            </section>
            {/* Work around TypeScript Error Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key `ts(2786)`, workaround that is to use @ts-expect-error Server Component */}
         /*   <section id="trusted">
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

