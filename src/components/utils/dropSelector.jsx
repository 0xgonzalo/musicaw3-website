'use client';
import { useState } from "react";
import { useLanguage } from '@/context/LanguageContext';

export default function DropSelector({ onDropSelect }) {
  const [selectedDrop, setSelectedDrop] = useState("");
  const { t } = useLanguage();

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedDrop(value);
    onDropSelect(value);
  };

  return (
    <div className="glass-card p-2 inline-flex items-center">
      <div className="relative">
        <select
          className="appearance-none bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white py-4 pl-6 pr-12 font-medium text-base cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 min-w-[280px]"
          onChange={handleSelect}
          value={selectedDrop}
        >
          <option value="" disabled className="bg-brand-darker text-white">
            {t.drops.selectPlaceholder}
          </option>
          {[...Array(13)].map((_, i) => (
            <option
              key={i + 1}
              value={String(i + 1).padStart(2, "0")}
              className="bg-brand-darker text-white py-2"
            >
              Drop Colectivo Vol.{i + 1}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
