import dynamic from 'next/dynamic';
import Hero from './components/lp/Hero';
import Footer from './components/lp/layout/Footer';

const Services = dynamic(() => import('./components/lp/Services'));
const PackageReveal = dynamic(() => import('./components/lp/PackageReveal'));
const Portfolio = dynamic(() => import('./components/lp/Portfolio'));
const Affordable = dynamic(() => import('./components/lp/Affordable'));

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero
                title="Welcome to Our Landing Page!"
                content="We offer the best solutions for your needs."
                buttonText="Learn More"
                backgroundColor="bg-green-600"
            />

            <Services />
            <PackageReveal />
            {/* <Affordable /> */}
            <Portfolio />
            <Footer
                title="Let's Collaborate!"
                subtitle="Grow Your Business with Us!"
                content="Our unique process will help you define your ideal customer and goals, so we know who to target with your website and online marketing."
            />
        </main>
    );
}

