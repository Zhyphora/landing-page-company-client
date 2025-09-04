import { WavyBackground } from "@/components/ui/shadcn-io/wavy-background";
import GlassmorphismButton from "./buttonGlass";
const Example = () => (
  <WavyBackground
    backgroundFill="#191919"
    // colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]}
    colors={["#4b55636d", "#10b9816d", "#1F29376d"]}
    waveWidth={100}
    blur={20}
    speed="fast"
    waveOpacity={0.8}
    containerClassName="h-[100vh] w-full overflow-hidden"
    className=" w-full mx-auto"
  >
    {/* <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-2">Dark Waves</h3>
      <p className="text-gray-300">Colorful waves on dark background</p>
    </div> */}
    <div className="flex-1 flex items-center justify-center px-8 z-10 pt-20">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9]">
          <span className="text-white">Branding</span>
          <span className="text-gray-400 mx-4">that</span>
          <span className="text-white">you</span>
          <br />
          <span className="text-white my-8">need</span>
          <span className="text-green-400 my-8 mx-4">Indeed</span>
        </h1>
        <p className="text-lg sm:text-xl mb-12 opacity-80 max-w-2xl mx-auto text-white">
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/* <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Get Started Now
          </button> */}
          <GlassmorphismButton text="Get Started Now" />
          <GlassmorphismButton text="See Projects" />
          {/* <button className="border border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition font-medium">
            See Projects
          </button> */}
        </div>

        {/* Scroll indicator - moved here between buttons and sponsors */}
        <div className="text-center mb-16 z-20">
          <p className="text-gray-400 text-sm mb-2">Scroll down</p>
          <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">to see projects</p>
        </div>
      </div>
    </div>
  </WavyBackground>
);
export default Example;
