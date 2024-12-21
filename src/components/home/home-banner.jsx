import { useEffect, useRef } from 'react';
import { FarcasterIcon, InstagramIcon, LensIcon, TelegramIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from '../utils/icons';
import Link from 'next/link';

export default function HomeBanner() {
  const videoRef = useRef(null);

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
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden"
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
        <div className='absolute right-4 top-[-75%] lg:top-[-50%]'>
          <div className='flex flex-col gap-y-4 my-[96px] z-10 mt-[768px]'>
            <Link href={"https://hey.xyz/u/musica_w3"} target="_blank" className='hover:brightness-150' ><LensIcon /></Link>    
            <Link href={"https://warpcast.com/musicaw3"} target="_blank" className='hover:brightness-150' ><FarcasterIcon /></Link>
            <Link href={"https://x.com/Musica_W3"} target="_blank" className='hover:brightness-150' ><TwitterIcon /></Link>
            <Link href={"https://www.youtube.com/channel/UCVCLZ0QHA4HksKi42VqeElg"} target="_blank" className='hover:brightness-150' ><YoutubeIcon /></Link>
            <Link href={"https://www.tiktok.com/@musica.w3"} target="_blank" className='hover:brightness-150' ><TiktokIcon /></Link>
            <Link href={"https://t.me/+atiU77-aTAwxM2Ix"} target="_blank" className='hover:brightness-150' ><TelegramIcon /></Link>
            <Link href={"https://www.instagram.com/musica.w3/"} target="_blank" className='hover:brightness-150' ><InstagramIcon /></Link>  
          </div>        
        </div>
      </div>
    </div>
  );
}