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
      <div className=" relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
          preload="auto"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div>
          <Hero />
          <Project />
        </div>
      </div>
      <Meet />
      <Process />
      <Services />
      <Reviews />
      <FAQ />
      <CTA />
    </div>
  );
}
