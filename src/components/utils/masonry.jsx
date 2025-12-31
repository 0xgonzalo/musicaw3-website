import Image from 'next/image';

const images = [
  { src: '/masonry/1.png', alt: 'Resonancias Paralelas flyer general', description: 'Resonancias Paralelas fue una exhibición con distintos eventos realizada en el CCK de Buenos Aires en Julio del 2024 donde más de 15.000 personas se acercaron a una sala de exposiciones, recitales de música en vivo y charlas sobre tecnología blockchain aplicada a las industrias culturales.', width: 384, height: 384 },
  { src: '/masonry/2.png', alt: 'Cyberw3b Festival', description: 'Cyberw3b fue el primer festival de música onchain de la comunidad realizado en Octubre de 2023 y con la participación de los miembros de MusicaW3 en conjunto con nuevos alumnos de la academia "El Método Web3" en Blockhouse, Buenos Aires.', width: 448, height: 224 },
  { src: '/masonry/3.png', alt: 'La Bitconf 2023', description: 'Participamos en distintos páneles de creadores en blockchain discutiendo sobre la importancia de la soberanía digital y los ecosistemas de las comunidades en internet.', width: 208, height: 224 },
  { src: '/masonry/4.png', alt: 'Buenopalooza', description: 'Buenopalooza fue una iniciativa de Bueno NFT donde se presentaron en el metaverso distintos trabajos en vivo de músicos de la comunidad.', width: 256, height: 320 },
  { src: '/masonry/5.png', alt: 'Music NFT Workshop en Cali', description: 'El primer workshop dado por uno de nuestros founders donde llevamos el mundo de la música onchain a diversos músicos colombianos que nunca antes habían tenido un acercamiento a esta nueva industria.', width: 456, height: 256 },
  { src: '/masonry/6.png', alt: 'Virtuality 2023', description: 'Virtuality es una de las convenciones de tecnología mas grandes de la ciudad de Buenos Aires. MúsicaW3 estuvo participando con su stand donde exhibimos el trabajo de distintos artistas que participan del colectivo además de brindar información sobre plataformas disponibles y grabación e interpretación de música en vivo.', width: 224, height: 224 },
  { src: '/masonry/7.png', alt: 'Charla en Resonancias Paralelas', description: 'La charla dada por un de nuestras founders fue en el auditorio del CCK donde enseñó a artistas y creadores de contenido a monetizar sus obras a través de las nuevas industrias que plantean las economías descentralizadas. Además de plantear el lado filosófico de la blockchain en relación a la sobernaía artística y la educación de calidad.', width: 224, height: 224 },
  { src: '/masonry/8.png', alt: 'Resonancias Paralelas Shows', description: 'Los shows se realizaron en la cúpula del CCK, un envidiable venue de la ciudad con una gran calidad técnica, acústica y arquitectónica. En ambos shows contamos con miembros del colectivo que tocaron en vivo para una audiencia a sala llena.', width: 224, height: 224 },
  { src: '/masonry/9.png', alt: 'Resonancias Paralelas Expo', description: 'Resonancias Paralelas fue una exhibición de Arte Aumentado donde distintas experiencias de música y visuales fueron presentadas ante una gran diversidad de audiencias. Además se contó con un microcine en la sala donde se exponían video del Drop Colectivo de ese mes y los links de acceso para que puedan ser coleccionados. En la sala había televisores con las obras e infografías para aprender más sobre la Web3.', width: 224, height: 224 },
  { src: '/masonry/10.png', alt: 'Base Meetup Buenos Aires', description: 'El primer meetup de Base realizado en Buenos Aires en Junio de 2024. Hubieron charlas sobre ENS, adopción de Base y la escucha de música en vivo y la presentación del Drop Colectivo en una sala de Cine.', width: 224, height: 224 },
  { src: '/masonry/11.png', alt: 'Songcamp Buenos Aires 2024', description: 'El Songcamp Buenos Aires fue una iniciativa de la comunidad en conjunto con Sweetman.eth donde se alquiló un estudio profesional de audio y se juntaron 4 grupos para hacer una canción en equipo y lanzarla en Febrero de 2024 en el marco del primer Songcamp Onchain de Buenos Aires.', width: 224, height: 224 },
  { src: '/masonry/12.jpg', alt: 'Evento fin de año 2024', description: 'Celebramos nuestro evento en el mítico lugar de Buenos Aires Dunepark con la participación del Drop Colectivo Vol.10 en conjunto con la comunidad del Noroeste Argentino Maskay y con músicos en vivo y dinámicas de onboarding de nuevos usuarios mediante premios de nuestros sponsors.', width: 224, height: 320 }
];

const Masonry = () => {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
      {images.map((image, index) => (
        <div key={index} className="mb-6 break-inside-avoid">
          <div className="glass-card p-2 group cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-base mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed line-clamp-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
