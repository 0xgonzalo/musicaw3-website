import Image from "next/image"             
import bannerImage from "../../../public/oasis-banner.png"

export default function OasisBanner() {
  return(
    <div className="w-full h-full ml-[120px]">
        <div className="flex flex-row justify-center items-center gap-x-12">
            <div className="flex flex-col gap-y-4">
                <h2 className="text-4xl font-bold">Hacia la Soberanía de los creadores Onchain</h2>
                <p>Nuestro programa integral para creadores onchainse encuentra disponible. Te brindamos todas las herramientas que puedas lograr que tu carrera como artista sea más sostenible.</p>
                <p>Es 100% gratuito y cubrimos varios tópicos de interés para principiantes, intermedios y creadores avanzados</p>
                <button className="bg-[#741E89] border border-[#500E61] rounded-[32px] w-[224px] py-4">Get Started</button>
            </div>
            <div className="w-full ">
              <Image src={bannerImage} alt="Oasis Banner" width={'523px'} height={'380px'} />
            </div>
        </div>
        <p className=" pb-2 pt-[88px]">In Parnership with</p>
        <div style={{width: '90%', height: '80px', position: 'relative'}}>
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #391242 0%, #641B76 50%, #391242 96%)', filter: 'blur(8px)'}}></div>
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <img src="/oasis-logo.png" alt="Oasis Logo" style={{width: '135px', height: 'auto'}} />
            <img src="/fundacion-blockchain-logo.png" alt="Fundacion Blockchain Logo" style={{width: '48px', height: 'auto'}} />
            <img src="/thanks-arbitrum-logo.png" alt="Thanks Arbitrum Logo" style={{width: '48px', height: 'auto'}} />
          </div>
        </div>
    </div>
  )
}