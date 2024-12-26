import Link from "next/link";
import { FarcasterIcon, InstagramIcon, TelegramIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from "../utils/icons";

export default function Footer() {
  return(
    <div className="w-full flex flex-col md:flex-row justify-between items-center bg-[#1F1F1F] pt-8 pb-8 md:pb-16">
      <h3 className="md:ml-16 font-stretchFont text-3xl">MUSICAW3</h3>
      <div className='flex gap-x-4 md:mr-16 pt-4 md:pt-4'>
          <Link href={"https://warpcast.com/musicaw3"} target="_blank" className='hover:brightness-150' ><FarcasterIcon /></Link>
          <Link href={"https://x.com/Musica_W3"} target="_blank" className='hover:brightness-150' ><TwitterIcon /></Link>
          <Link href={"https://www.youtube.com/channel/UCVCLZ0QHA4HksKi42VqeElg"} target="_blank" className='hover:brightness-150' ><YoutubeIcon /></Link>
          <Link href={"https://www.tiktok.com/@musica.w3"} target="_blank" className='hover:brightness-150' ><TiktokIcon /></Link>
          <Link href={"https://t.me/+atiU77-aTAwxM2Ix"} target="_blank" className='hover:brightness-150' ><TelegramIcon /></Link>
          <Link href={"https://www.instagram.com/musica.w3/"} target="_blank" className='hover:brightness-150' ><InstagramIcon /></Link>    
        </div>        
    </div>
  )
}