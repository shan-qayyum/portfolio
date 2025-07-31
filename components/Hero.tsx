import { useEffect } from "react";
import React, { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ReactTyped } from "react-typed";
// ...existing code...

const Hero = () => {
  // ...existing code...
  // Use react-typed for animated profession text
  const handleShowWorkClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="top" className="pb-20 pt-36 relative overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-purple-500 via-pink-300 to-blue-500 opacity-40"></div>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      {/* ...existing code... */}
    </div>

      {/* ...removed CanvasRevealEffect... */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      {/* ...removed Globe effect... */}

      <div className="flex justify-center relative my-5 mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Creating Dynamic Web Magic !
          </p>

          {/* Animated text effect */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m <span className="font-extrabold text-purple-500">Shan</span>  -  
            <span className="font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mx-1" style={{ minWidth: '12ch', display: 'inline-block' }}>
              <span dir="ltr" style={{ textAlign: "left", display: "inline-block", width: "100%" }}>
                <ReactTyped
                  strings={["  Full Stack Developer!", "  AI/ML Engineer!"]}
                  typeSpeed={70}
                  backSpeed={40}
                  backDelay={2000}
                  startDelay={1200}
                  loop={true}
                  showCursor={false}
                />
              </span>
            </span>
          </p>

          {/* Demo: Test different ReactTyped speeds below */}

          <div className="flex gap-4">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={handleShowWorkClick}
            />
          </div>
        </div>
      </div>
      {/* Add a ref to BentoGrid for intersection observer */}
      {/* ...existing code... */}
    </div>
  );
};

export default Hero;
