import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Section } from "./components/Section";
import { BrutalImage } from "./components/BrutalImage";
import { BrutalButton } from "./components/BrutalButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="sticky top-8 right-8 z-50 flex justify-end gap-6 px-8 py-4 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <a href="#works" className="hover:text-[#0200EA] transition-colors">WORK</a>
        <a href="#about" className="hover:text-[#0200EA] transition-colors">ABOUT</a>
        <a href="#contact" className="hover:text-[#0200EA] transition-colors">CONTACT</a>
        <SignOutButton />
      </nav>

      <Section id="home" className="border-b-2 border-white">
        <h1 className="text-[25vw] leading-none -rotate-2 font-anton">XEDNIV</h1>
      </Section>

      <Section id="about">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-8 flex-wrap">
              <div>
                <span className="block mb-1">XEDNIV</span>
                <span className="block mb-1">VISUAL ARTIST / MOTION DESIGNER</span>
                <span className="block">BASED IN COMO, ITALY</span>
              </div>
              <BrutalImage src="/como-icon.png" alt="Lake Como Icon" className="w-[120px]" />
            </div>
          </div>

          <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-end">
            <div>
              <h1 className="font-anton text-[clamp(5rem,10vw,9rem)] leading-[1.1] mb-6">
                CREATIVE<br />DEVELOPER
              </h1>
              <p className="text-2xl leading-relaxed">
                I SUPPORT ARTISTS AND AGENCIES WITH CREATIVE DEVELOPMENT, STORYTELLING, AND DIGITAL EXPRESSION.
              </p>
            </div>
            <BrutalImage 
              src="/your-image.jpg" 
              alt="PORTRAIT OF XEDNIV - CREATIVE DEVELOPER"
              className="border-2 border-white"
            />
          </div>
        </div>
      </Section>

      <Section id="works">
        <div className="max-w-7xl mx-auto w-full space-y-24">
          {works.map((work, index) => (
            <div key={index} className="work-entry">
              <div className="flex justify-between flex-wrap font-anton text-5xl mb-2">
                <h2>{work.title1}</h2>
                <h2>{work.title2}</h2>
              </div>
              <div className="text-center text-lg opacity-70 mb-8">{work.period}</div>
              <BrutalImage
                src={work.image}
                alt={work.imageAlt}
                className="w-full max-h-[500px] object-cover border-2 border-white mb-2"
              />
              <div className="text-center font-mono opacity-60 mb-8">{work.caption}</div>
              <div className="grid md:grid-cols-3 gap-8 text-xl leading-relaxed">
                {work.texts.map((text, i) => (
                  <p key={i} className={`border-l ${i % 2 ? 'border-l-[#0200EA] border-l-2 border-dashed' : 'border-l-white'} pl-4 font-mono hover:text-[#0200EA] transition-colors`}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" className="text-center">
        <h1 className="font-anton text-[12vw] mb-4">GET IN TOUCH</h1>
        <a href="mailto:vvork.xed@gmail.com" className="text-4xl text-[#0200EA] underline mb-12 inline-block">
          vvork.xed@gmail.com
        </a>

        <div className="mt-8">
          <h2 className="text-lg mb-4">Social:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-md mx-auto">
            <BrutalButton onClick={() => window.open('https://youtu.be/6KBu6psoLMY?si=-K9Zt5PWsJMJ24Z-', '_blank')}>
              YouTube
            </BrutalButton>
            <BrutalButton onClick={() => window.open('https://www.linkedin.com/in/samuele-merga-789989338/', '_blank')}>
              LinkedIn
            </BrutalButton>
            <BrutalButton onClick={() => window.open('https://vimeo.com', '_blank')}>
              Vimeo
            </BrutalButton>
          </div>
        </div>

        <div className="mt-8">
          <BrutalButton onClick={() => window.location.href = '/cv-xedniv.pdf'}>
            Download CV
          </BrutalButton>
        </div>

        <div className="mt-20 font-mono text-[#0200EA]">
          2017 — 2025 © ALL RIGHTS RESERVED — CODE BY XEDNIV
        </div>
      </Section>
    </div>
  );
}

const works = [
  {
    title1: "BRUTALIST",
    title2: "ARCHITECTURE",
    period: "1950S – EARLY 1980S",
    image: "/your-work.jpg",
    imageAlt: "Municipal Building – Belgrade",
    caption: '"Municipal Building – Belgrade"',
    texts: [
      "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. CURABITUR A RISUS LOREM.",
      "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER NON ERAT NEC FELIS FACILISIS MALESUADA.",
      "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLAM NON DIAM EU LIBERO TINCIDUNT TEMPOR."
    ]
  },
  {
    title1: "DIGITAL",
    title2: "INSTALLATION",
    period: "2022 – INTERACTIVE",
    image: "/digital-installation.jpg",
    imageAlt: "Digital Installation – Berlin",
    caption: '"Digital Installation – Berlin"',
    texts: [
      "PROJECT INVOLVING IMMERSIVE AUDIOVISUAL INTERACTION WITH SENSOR INPUT.",
      "DEVELOPED WITH TOUCH DESIGNER AND REAL-TIME MOTION TRACKING SYSTEMS.",
      "EXHIBITED AT ART+TECH FESTIVAL 2022, BERLIN."
    ]
  },
  {
    title1: "EXPERIMENTAL",
    title2: "VIDEO",
    period: "2023 – SHORT FILM",
    image: "/experimental-video.jpg",
    imageAlt: "Experimental Video – Milan",
    caption: '"Experimental Video – Milan"',
    texts: [
      "A CINEMATIC EXPLORATION OF MEMORY, LIGHT, AND URBAN SPACES.",
      "SHOT ENTIRELY ON SUPER 8 AND DIGITALLY PROCESSED FOR MODERN SCREENINGS.",
      "PREMIERED AT LOCAL ART CINEMA NIGHT 2023, MILAN."
    ]
  }
];
