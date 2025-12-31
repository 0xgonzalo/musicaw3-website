'use client';
import Image from "next/image"
import bannerImage from "../../../public/farcaster-banner.jpeg"
import { useLanguage } from '@/context/LanguageContext';

export default function FarcasterBanner() {
  const { t } = useLanguage();

  return(
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-tl from-brand-darker via-black to-brand-darker" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 via-transparent to-brand-primary/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card p-2 md:p-3 overflow-hidden">
              <Image
                src={bannerImage}
                alt="Farcaster Banner"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
                {t.farcaster.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight section-heading">
                {t.farcaster.title}
              </h2>
            </div>

            <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
              <p>{t.farcaster.description1}</p>
              <p>{t.farcaster.description2}</p>
            </div>

            <a
              href="https://www.youtube.com/watch?v=i3jSoT714Vw"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-flex items-center justify-center gap-2 w-fit mt-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>{t.farcaster.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
