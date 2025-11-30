import React, { useState, useEffect, useCallback, memo, FC } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CTAButton,
  MainTitle,
  SocialLink,
  StatusBadge,
  TechStack,
} from "@/src/lib/helper";
import {
  ERASING_SPEED,
  PAUSE_DURATION,
  SOCIAL_LINKS,
  TECH_STACK,
  TYPING_SPEED,
  WORDS,
} from "@/src/lib/constant";

// --------------------------------------------------
// Main Component
// --------------------------------------------------
const Home: FC = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // AOS Init
  useEffect(() => {
    const init = () =>
      AOS.init({
        once: true,
        offset: 10,
      });

    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Typing Logic
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timer);
  }, [handleTyping]);

  // Lottie
  const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`,
  };

  return (
    <div
      className="min-h-screen bg-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] py-12"
      id="Home"
    >
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* LEFT */}
            <div
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <StatusBadge />
              <MainTitle />

              {/* Typing */}
              <div
                className="h-8 flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-indigo-500 to-purple-500 ml-1 animate-blink"></span>
              </div>

              {/* Description */}
              <p
                className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                I build high-quality, scalable, and user-focused digital
                experiences. My work blends clean UI, efficient backend systems,
                and modern engineering best practices to deliver products that
                are fast, reliable, and truly impactful.
              </p>

              {/* Tech Stack */}
              <div
                className="flex flex-wrap gap-3"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {TECH_STACK.map((t, i) => (
                  <TechStack key={i} tech={t} />
                ))}
              </div>

              {/* CTA */}
              <div
                className="flex flex-row gap-3"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <CTAButton
                  href="#Portofolio"
                  text="View Projects"
                  icon={ExternalLink}
                />
                <CTAButton href="#Contact" text="Contact Me" icon={Mail} />
              </div>

              {/* Socials */}
              <div
                className="hidden sm:flex gap-4 text-gray-600"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                {SOCIAL_LINKS.map((s, i) => (
                  <SocialLink key={i} {...s} />
                ))}
              </div>
            </div>

            {/* RIGHT - Lottie */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-full opacity-95">
                {/* Soft White Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-3xl blur-3xl transition-all duration-700 ${
                    isHovering ? "opacity-60 scale-105" : "opacity-30 scale-100"
                  }`}
                ></div>

                {/* Lottie */}
                <div
                  className={`relative lg:left-12 z-10 w-full opacity-100 transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}
                >
                  <DotLottieReact {...lottieOptions} />
                </div>

                {/* Main Glow */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-60" : "opacity-25"
                  }`}
                >
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] 
                bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl 
                animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                  isHovering ? "scale-110" : "scale-100"
                }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
