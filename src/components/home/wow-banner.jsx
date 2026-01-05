'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WowBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🎨",
      text: "Art, live music, and interactive installations"
    },
    {
      icon: "⛓️",
      text: "Onchain + offchain cultural activations"
    },
    {
      icon: "🎤",
      text: "Workshops, talks, and immersive experiences"
    },
    {
      icon: "🌉",
      text: "Bridging technology, art, and culture"
    },
    {
      icon: "🤝",
      text: "Culture in service of the community"
    },
    {
      icon: "🛠️",
      text: "Development of our own tools to distribute digital art"
    },
    {
      icon: "🌎",
      text: "Extensive network of artists, curators and supporters around LATAM"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      id="wow-festival"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-darker to-black" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[180px] animate-float" />

      {/* Particle grid overlay */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Hero section with logo */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo container with glow effect */}
          <div className="relative mb-8 group">
            {/* Animated glow rings */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-spin-slow" />
            <div className="absolute inset-0 -m-4 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 rounded-full blur-2xl opacity-20 animate-pulse-slow" />

            {/* Logo with glass frame */}
            <div className="relative glass-card p-6 md:p-8 rounded-3xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/wow-logo.png"
                alt="WOW! Festival"
                width={280}
                height={120}
                className="w-48 md:w-72 h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-widest uppercase">Music Festival</span>
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main tagline */}
          <h2 className="font-stretchFont text-3xl md:text-4xl lg:text-5xl mb-6 max-w-4xl leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              Art, Music and Tech for EVERYONE
            </span>
          </h2>
        </div>

        {/* Description card */}
        <div className={`relative mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
          <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-white/5">
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
              A live cultural lab where musicians, artists, creators, collectives and communities experiment with{' '}
              <span className="text-cyan-400 font-medium">onchain tools</span>,{' '}
              <span className="text-fuchsia-400 font-medium">digital collectibles</span> and{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent font-medium">new ownership models</span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <p className="text-white/60 text-base md:text-lg">
                through music, art exhibitions, experiences and participation — <span className="text-white/80 italic">not speculation</span>.
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-500/50" />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-cyan-500/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-500/30 group-hover:via-fuchsia-500/30 group-hover:to-cyan-500/30 transition-all duration-500" />

              <div className="relative glass-card p-5 md:p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex items-center gap-4 group-hover:translate-y-[-2px]">
                <span className="text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <p className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-500" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 animate-pulse" />
            <div className="w-24 h-px bg-gradient-to-r from-fuchsia-500/50 via-cyan-500/50 to-fuchsia-500/50" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-fuchsia-500/50 to-fuchsia-500" />
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
    </section>
  );
}
