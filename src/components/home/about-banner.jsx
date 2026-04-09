'use client';
import Image from "next/image"
import bannerImage from "../../../public/banner-about-image.png"
import { useLanguage } from '@/context/LanguageContext';

export default function AboutBanner() {
  const { t } = useLanguage();

  const stats = [
    { value: "+2k", label: "Collectors" },
    { value: "+150", label: t.about.stats.artists },
    { value: "+2k", label: t.about.stats.community }
  ];

  return(
    <section className="relative w-full py-24 md:py-32 overflow-hidden" id="about">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-darker to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image with glass frame */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card p-2 md:p-3">
              <Image
                src={bannerImage}
                alt="Foto de la Comunidad"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="space-y-2">
              <span className="text-brand-accent text-sm font-medium tracking-widest uppercase">
                {t.about.subtitle}
              </span>
              <h2 className="font-stretchFont text-4xl md:text-5xl lg:text-6xl section-heading">
                MUSICAW3
              </h2>
            </div>

            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-brand">{stat.value}</div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
