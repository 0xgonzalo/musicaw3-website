'use client';
import { useState } from "react";
import Drop from "../utils/drop";
import DropSelector from "../utils/dropSelector";
import dropList from "@/components/data/dropList.js"
import { useLanguage } from '@/context/LanguageContext';

export default function DropsBanner() {
  const [selectedDropId, setSelectedDropId] = useState("");
  const { t } = useLanguage();

  const handleDropSelect = (dropId) => {
    setSelectedDropId(dropId);
  };

  const selectedDrop = dropList.find(drop => drop.id === selectedDropId);

  return(
    <section className="relative w-full py-24 md:py-32 overflow-hidden" id="drops">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-darker to-black" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[180px] translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            {t.drops.subtitle}
          </span>
          <h2 className="font-stretchFont text-5xl md:text-7xl lg:text-8xl section-heading mb-8">
            {t.drops.title}
          </h2>
          <p className="max-w-3xl mx-auto text-white/60 text-base md:text-lg leading-relaxed">
            {t.drops.description}
          </p>
        </div>

        {/* Drop Selector */}
        <div className="flex justify-center mb-12">
          <DropSelector onDropSelect={handleDropSelect} />
        </div>

        {/* Selected Drop */}
        <div className="min-h-[200px]">
          {selectedDrop ? (
            <Drop {...selectedDrop} />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <p className="text-white/40 text-lg">{t.drops.emptyState}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
