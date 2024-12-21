import Image from "next/image"             
import bannerImage from "../../../public/banner-about-image.png"

export default function AboutBanner() {
  return(
    <div className="w-full h-full">
      <div className="realtive bg-[url('/about-banner-textura.png')]  pt-8 pb-16 lg:pt-12 lg:pb-20  lg:px-24 bg-cover" >
        <div className="flex flex-col md:flex-row" id="about">
          <div className="w-full flex items-center justify-center">
                <Image
                  src={bannerImage}
                  alt="Foto de la Comunidad"
                />
          </div>
          <div className="w-full h-full
                            grid grid-cols-1
                            gap-y-12
                            px-2  py-8 lg:py-12">
              <div className="col-span-2 w-full h-full flex flex-col items-center justify-center px-4">
                <h2 className={`font-stretchFont text-center lg:text-left md:text-6xl lg:text-6xl text-dark drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] max-w-screen-sm pb-4`}>MUSICAW3</h2>
                <p className="text-center">{/*We are a community of independent Latin American musicians dedicated to promoting education, support and spread awareness of the collaborative effects of Web3 music networks in spanish. 
                  You can find us daily organizing discussions and debates on blockchain technology over different social media platforms and giving free content to new and advanced web3 users on how to leverage 
                  these tools for more sustainable careers through onchain songs creation and Network Effects.*/} Somos una comunidad de músicos independientes de América Latina dedicados a promover la educación, el apoyo y la concienciación sobre los efectos colaborativos de las redes musicales en Web3 en español.
Nos encuentras diariamente organizando discusiones y debates sobre tecnología blockchain en diversas plataformas de redes sociales, además de ofrecer contenido gratuito para usuarios nuevos y avanzados de Web3 sobre cómo aprovechar estas herramientas para carreras más sostenibles mediante la creación de canciones en la blockchain y los network effects.</p> 
                <br />
                <p className="text-center ">{/* Our main goal is to cultivate an inclusive and mutually beneficial environment for everyone involved, welcoming new individuals into the ecosystem, including fans, holders, tech enthusiasts, 
                  musicians, producers, managers, and anyone who wants to participate. We achieve this through streaming programs, interviews, metaverse events, IRL festivals, fostering web3 culture in our cities, 
                  and encouraging people to collaborate with us on our onchain releases. */}Nuestro principal objetivo es cultivar un entorno inclusivo y mutuamente beneficioso para todos los involucrados, dando la bienvenida a nuevas personas en el ecosistema, incluidos fanáticos, holders, entusiastas tecnológicos, músicos, productores, gestores y cualquier persona interesada en participar.
Logramos esto a través de programas de streaming, entrevistas, eventos en el metaverso, festivales presenciales, fomentando la cultura web3 en nuestras ciudades e incentivando a las personas a colaborar con nosotros en nuestros lanzamientos en la blockchain. </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}