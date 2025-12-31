'use client';
import Link from "next/link";
import { FarcasterIcon, InstagramIcon, TelegramIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from "../utils/icons";
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { href: "https://warpcast.com/musicaw3", icon: FarcasterIcon, label: "Farcaster" },
    { href: "https://x.com/Musica_W3", icon: TwitterIcon, label: "Twitter" },
    { href: "https://www.youtube.com/channel/UCVCLZ0QHA4HksKi42VqeElg", icon: YoutubeIcon, label: "YouTube" },
    { href: "https://www.tiktok.com/@musica_w3", icon: TiktokIcon, label: "TikTok" },
    { href: "https://t.me/+atiU77-aTAwxM2Ix", icon: TelegramIcon, label: "Telegram" },
    { href: "https://www.instagram.com/musica_w3/", icon: InstagramIcon, label: "Instagram" },
  ];

  return(
    <footer className="relative w-full overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative bg-brand-darker/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="font-stretchFont text-3xl md:text-4xl section-heading">
                MUSICAW3
              </h3>
              <p className="text-white/50 text-sm">
                {t.footer.tagline}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="group relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-brand-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  <div className="relative text-white/60 group-hover:text-white transition-colors duration-300">
                    <Icon />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} MusicaW3. {t.footer.rights}</p>
            <p className="flex items-center gap-2">
              {t.footer.madeWith} <span className="text-brand-primary">♥</span> {t.footer.forCommunity}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
