import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Project />
    </div>
  );
}
