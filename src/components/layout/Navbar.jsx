'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [displayPhoneMenu, setDisplayPhoneMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#events', label: t.nav.events },
    { href: '#drops', label: t.nav.drops }
  ];

  return(
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      ${scrolled
        ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="./logo-mw3.png"
              alt="musicaw3-logo"
              className="relative h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 rounded-full group"
                  >
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-all duration-300" />
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="relative flex items-center gap-1.5 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              aria-label="Toggle language"
            >
              <span className={`text-xs font-medium transition-all duration-300 ${language === 'es' ? 'text-white' : 'text-white/40'}`}>
                ES
              </span>
              <span className="text-white/30">/</span>
              <span className={`text-xs font-medium transition-all duration-300 ${language === 'en' ? 'text-white' : 'text-white/40'}`}>
                EN
              </span>
            </button>
          </div>

          {/* Mobile: Language Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              aria-label="Toggle language"
            >
              <span className={`text-xs font-medium transition-all duration-300 ${language === 'es' ? 'text-white' : 'text-white/40'}`}>
                ES
              </span>
              <span className="text-white/30">/</span>
              <span className={`text-xs font-medium transition-all duration-300 ${language === 'en' ? 'text-white' : 'text-white/40'}`}>
                EN
              </span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setDisplayPhoneMenu(!displayPhoneMenu)}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center items-center gap-1.5">
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${displayPhoneMenu ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${displayPhoneMenu ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${displayPhoneMenu ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${displayPhoneMenu ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="glass-card p-4 mt-2">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setDisplayPhoneMenu(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
