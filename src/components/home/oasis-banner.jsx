'use client';
import Image from "next/image"
import bannerImage from "../../../public/oasis-banner.jpg"
import { useLanguage } from '@/context/LanguageContext';

export default function OasisBanner() {
  const { t } = useLanguage();

  const partners = [
    { src: "/fundacion-blockchain-logo.png", alt: "Fundacion Blockchain Logo", width: 48 },
    { src: "/oasis-logo.png", alt: "Oasis Logo", width: 135 },
    { src: "/thanks-arbitrum-logo.png", alt: "Thanks Arbitrum Logo", width: 48 },
  ];

  return(
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-black to-brand-darker" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/20 via-transparent to-brand-primary/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card p-2 md:p-3 overflow-hidden">
              <Image
                src={bannerImage}
                alt="Oasis Banner"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-brand-accent text-sm font-medium tracking-widest uppercase">
                {t.oasis.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="section-heading">{t.oasis.title1}</span>
                <br />
                <span className="text-white">{t.oasis.title2}</span>
              </h2>
            </div>

            <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
              <p>{t.oasis.description1}</p>
              <p>{t.oasis.description2}</p>
            </div>

            <a
              href="https://www.youtube.com/watch?v=apOk-QepQVY&list=PL8aLO5KNFLv2O1cS7OjPOt9YDN7drf1jf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-flex items-center justify-center gap-2 w-fit mt-2"
            >
              <span>{t.oasis.cta}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Partners */}
            <div className="pt-6 mt-3 border-t border-white/10">
              <p className="text-white/40 text-xs mb-3 tracking-wide">{t.oasis.partners}</p>
              <div className="glass-card p-3 flex items-center justify-around gap-4">
                {partners.map((partner) => (
                  <img
                    key={partner.alt}
                    src={partner.src}
                    alt={partner.alt}
                    style={{ width: partner.width * 0.7 }}
                    className="h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
