'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function WowBanner() {
  const { t } = useLanguage();
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

  const featureIcons = ["🎨", "⛓️", "🎤", "🌉", "🤝", "🛠️", "🌎"];
  const rewardIcons = ["🎭", "🏅", "🎁", "🎵", "🚀", "⭐"];
  const bonusIcons = ["🎶", "✨", "💎", "📱", "🏆", "🎫"];

  const tierStyles = [
    { color: "from-amber-700 to-amber-500", borderColor: "border-amber-600/30" },
    { color: "from-gray-400 to-gray-200", borderColor: "border-gray-400/30" },
    { color: "from-yellow-500 to-yellow-300", borderColor: "border-yellow-500/30" },
    { color: "from-purple-500 to-pink-400", borderColor: "border-purple-500/30" },
    { color: "from-cyan-300 to-white", borderColor: "border-cyan-400/30" },
  ];

  const tierKeys = ['bronze', 'silver', 'gold', 'investor', 'diamond'];

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
            <span className="text-sm font-medium text-white/80 tracking-widest uppercase">{t.wow.badge}</span>
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main tagline */}
          <h2 className="font-stretchFont text-3xl md:text-4xl lg:text-5xl mb-6 max-w-4xl leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              {t.wow.tagline}
            </span>
          </h2>
        </div>

        {/* Description card */}
        <div className={`relative mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
          <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-white/5">
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
              {t.wow.description}{' '}
              <span className="text-cyan-400 font-medium">{t.wow.descriptionHighlight1}</span>,{' '}
              <span className="text-fuchsia-400 font-medium">{t.wow.descriptionHighlight2}</span> and{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent font-medium">{t.wow.descriptionHighlight3}</span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <p className="text-white/60 text-base md:text-lg">
                {t.wow.descriptionEnd} <span className="text-white/80 italic">{t.wow.descriptionItalic}</span>.
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-500/50" />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.wow.features.map((featureText, index) => (
            <div
              key={index}
              className="group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-cyan-500/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-hover:from-cyan-500/30 group-hover:via-fuchsia-500/30 group-hover:to-cyan-500/30 transition-all duration-500" />

              <div className="relative glass-card p-5 md:p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex items-center gap-4 group-hover:translate-y-[-2px]">
                <span className="text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {featureIcons[index]}
                </span>
                <p className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  {featureText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section divider */}
        <div className="flex justify-center my-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* REWARDS FOR ARTIFACT COLLECTORS */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-white/10 mb-6">
              <span className="text-lg">🎁</span>
              <span className="text-sm font-medium text-white/80 tracking-widest uppercase">{t.wow.collectors.badge}</span>
            </div>
            <h3 className="font-stretchFont text-2xl md:text-3xl lg:text-4xl mb-4">
              <span className="bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 bg-clip-text text-transparent">
                {t.wow.collectors.title}
              </span>
            </h3>
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto">
              {t.wow.collectors.description}
            </p>
          </div>

          {/* Rewards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
            {t.wow.collectors.rewards.map((rewardText, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500/0 to-cyan-500/0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 group-hover:from-fuchsia-500/20 group-hover:to-cyan-500/20 transition-all duration-500" />
                <div className="relative glass-card p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex items-center gap-3">
                  <span className="text-xl md:text-2xl">{rewardIcons[index]}</span>
                  <p className="text-white/80 text-sm md:text-base">{rewardText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="flex justify-center my-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* ARTIFACT COLLECTOR TIERS */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-purple-500/10 border border-white/10 mb-6">
              <span className="text-lg">🏆</span>
              <span className="text-sm font-medium text-white/80 tracking-widest uppercase">{t.wow.tiers.badge}</span>
            </div>
            <h3 className="font-stretchFont text-2xl md:text-3xl lg:text-4xl mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-white to-purple-300 bg-clip-text text-transparent">
                {t.wow.tiers.title}
              </span>
            </h3>
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto">
              {t.wow.tiers.description}
            </p>
          </div>

          {/* Tiers comparison table */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
            {tierKeys.map((tierKey, index) => {
              const tierData = t.wow.tiers[tierKey];
              const style = tierStyles[index];
              return (
                <div key={index} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-b ${style.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className={`relative h-full glass-card rounded-2xl border ${style.borderColor} overflow-hidden transition-all duration-300 group-hover:translate-y-[-4px]`}>
                    {/* Tier header */}
                    <div className={`bg-gradient-to-r ${style.color} p-4 text-center`}>
                      <h4 className="font-stretchFont text-xl md:text-2xl text-black font-bold">{tierData.name}</h4>
                      <p className="text-black/80 text-sm font-medium">{tierData.artifacts}</p>
                    </div>

                    {/* Benefits list */}
                    <div className="p-4 md:p-5">
                      <ul className="space-y-3">
                        {tierData.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2 text-sm text-white/80">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${style.color} flex-shrink-0`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section divider */}
        <div className="flex justify-center my-20">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* FIRST WEEK VOTING BONUS */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Highlighted container */}
          <div className="relative">
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-500 rounded-3xl blur-lg opacity-40 animate-pulse-slow" />

            <div className="relative glass-card rounded-3xl border border-green-500/30 overflow-hidden">
              {/* Header banner */}
              <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 p-6 md:p-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 mb-4">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">{t.wow.firstWeek.badge}</span>
                </div>
                <h3 className="font-stretchFont text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                  {t.wow.firstWeek.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
                  {t.wow.firstWeek.description}
                </p>
              </div>

              {/* Bonuses grid */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {t.wow.firstWeek.bonuses.map((bonusText, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-green-500/10 hover:border-green-500/30 transition-colors duration-300">
                      <span className="text-2xl">{bonusIcons[index]}</span>
                      <p className="text-white/80 text-sm md:text-base">{bonusText}</p>
                    </div>
                  ))}
                </div>

                {/* Urgency callout */}
                <div className="mt-8 text-center">
                  <p className="text-green-400 text-sm md:text-base font-medium">
                    {t.wow.firstWeek.urgency}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLLECT ARTIFACT CTA */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://artizen.fund/index/p/musicaw3-2?scroll=no&season=6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
          >
            {/* Button glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />

            <div className="relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-full text-white font-bold text-lg md:text-xl tracking-wide uppercase transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <span>{t.wow.cta}</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
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
