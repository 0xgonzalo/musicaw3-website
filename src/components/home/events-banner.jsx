'use client';
import Masonry from "../utils/masonry";
import { useLanguage } from '@/context/LanguageContext';

export default function EventsBanner() {
  const { t } = useLanguage();

  return(
    <section className="relative w-full py-24 md:py-32 overflow-hidden" id="events">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-darker to-black" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            {t.events.subtitle}
          </span>
          <h2 className="font-stretchFont text-5xl md:text-7xl lg:text-8xl section-heading">
            {t.events.title}
          </h2>
        </div>

        {/* Masonry Grid */}
        <Masonry />
      </div>
    </section>
  )
}
