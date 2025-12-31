import { useEffect, useRef } from 'react';
import { FarcasterIcon, InstagramIcon, LensIcon, TelegramIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from '../utils/icons';
import Link from 'next/link';

export default function HomeBanner() {
  const videoRef = useRef(null);

  const socialLinks = [
    { href: "https://hey.xyz/u/musica_w3", icon: LensIcon, label: "Lens" },
    { href: "https://www.youtube.com/channel/UCVCLZ0QHA4HksKi42VqeElg", icon: YoutubeIcon, label: "YouTube" },
    { href: "https://warpcast.com/musicaw3", icon: FarcasterIcon, label: "Farcaster" },
    { href: "https://www.instagram.com/musica_w3/", icon: InstagramIcon, label: "Instagram" },
    { href: "https://t.me/+atiU77-aTAwxM2Ix", icon: TelegramIcon, label: "Telegram" },
    { href: "https://x.com/Musica_W3", icon: TwitterIcon, label: "Twitter" },
    { href: "https://www.tiktok.com/@musica_w3", icon: TiktokIcon, label: "TikTok" },
  ];

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Error al reproducir el video:", error);
      }
    };

    playVideo();

    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return(
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden z-0"
        src="/Logo-Animado.mp4"
        autoPlay
        playsInline
        muted
        loop
        controlsList="noplaybackrate nofullscreen nodownload"
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10 pointer-events-none" />

      {/* Ambient glow effects - reduced intensity and better positioning */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-[5]" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-[5]" />

      {/* Social Links - Glass Sidebar */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="glass-card p-1 md:p-2 flex flex-col gap-0.5 md:gap-1">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="group relative p-1.5 md:p-2.5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-brand-primary/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              <div className="relative text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300 scale-90 md:scale-100">
                <Icon />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-pulse-slow">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
