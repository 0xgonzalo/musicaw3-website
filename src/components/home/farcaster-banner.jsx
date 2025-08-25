import Image from "next/image"             
import bannerImage from "../../../public/farcaster-banner.jpeg"

export default function FarcasterBanner() {
  return(
    <div className="w-full h-full md:ml-[160px] my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center md:justify-start">
              <Image src={bannerImage} alt="Farcaster Banner" width={600} height={280} className="w-[280px] md:w-[600px] h-auto"/>
            </div>
            <div className="flex flex-col gap-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold">Conectando con la Comunidad Farcaster</h2>
                <p className="text-sm md:text-base md:max-w-md">Ya está disponible nuestra Masterclass sobre Farcaster y como monetizar siendo creador</p>
                <p className="text-sm md:text-base md:max-w-md">Farcaster es una red social descentralizada que permite a los usuarios crear y compartir contenido de forma libre y sin censura.</p>
                <button className="bg-[#741E89] border border-[#500E61] rounded-[32px] md:w-[224px] py-4 mb-8 md:mb-0 mx-12 md:mx-0 m-4 md:my-0"> 
                    <a href="https://www.youtube.com/watch?v=i3jSoT714Vw" target="_blank">Ver Masterclass</a>
                </button>
            </div>
        </div>
    </div>
  )
}
