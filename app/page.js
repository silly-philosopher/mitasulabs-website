import {Suspense} from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials11 from "@/components/Testimonials11";

export default function Home() {
    return (
        <>
            <Suspense>
                <Header/>
            </Suspense>
            <main>
                <Hero/>
                <Problem/>
                <FeaturesListicle/>
                <div className="divider bg-base-200 mt-0 mb-0"/>
                <Testimonials11/>
                <Pricing/>
                <FAQ/>
            </main>
            <Footer/>
        </>
    );
}