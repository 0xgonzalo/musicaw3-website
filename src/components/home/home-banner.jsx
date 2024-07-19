import Image from 'next/image'
import { FarcasterIcon, TwitterIcon, YoutubeIcon, TiktokIcon, TelegramIcon, InstagramIcon } from '../utils/icons'
import Link from 'next/link'

export default function HomeBanner() {
  return(
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image 
          src="/logo-banner.png"
          width={482}
          height={482}
          alt="MusicaW3 logo"
        />
        <div className='flex flex-row gap-x-4 my-[96px]'>
          <Link href={"https://warpcast.com/musicaw3"} target="_blank" className='hover:brightness-150' ><FarcasterIcon /></Link>
          <Link href={"https://x.com/Musica_W3"} target="_blank" className='hover:brightness-150' ><TwitterIcon /></Link>
          <Link href={"https://www.youtube.com/channel/UCVCLZ0QHA4HksKi42VqeElg"} target="_blank" className='hover:brightness-150' ><YoutubeIcon /></Link>
          <Link href={"https://www.tiktok.com/@musica.w3"} target="_blank" className='hover:brightness-150' ><TiktokIcon /></Link>
          <Link href={"https://t.me/+atiU77-aTAwxM2Ix"} target="_blank" className='hover:brightness-150' ><TelegramIcon /></Link>
          <Link href={"https://www.instagram.com/musica.w3/"} target="_blank" className='hover:brightness-150' ><InstagramIcon /></Link>    
        </div>        
      </div>
    </div>
  )
}