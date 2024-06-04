import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useMediaQuery } from "usehooks-ts";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    })
  }, []);
  const isMobile = useMediaQuery("(max-width: 760px)");
  return (
    <section className="w-full nav-height bg-block relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline src={isMobile ? smallHeroVideo : heroVideo}  />
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">Form $199/month or $9999</p>
      </div>
    </section>
  );
};

export default Hero;
