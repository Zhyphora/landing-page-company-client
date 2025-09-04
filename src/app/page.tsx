import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Meet from "../components/Meet";
import Process from "../components/Process";
import Services from "../components/Services";
import Project from "../components/Project";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* <Navbar /> */}
      <Hero />
      <Project />
      <Meet />
      <Process />
      <Services />
      <Reviews />
      <FAQ />
      <CTA />
    </div>
  );
}
