// components/MasonryLayout.js
import Image from 'next/image';

const images = [
  // Agrega tus imágenes aquí con sus URLs y tamaños
  { src: '/masonry/1.png', alt: 'Resonancias Paralelas flyer general', description: 'blablablalba', width: 384, height: 384 },
  { src: '/masonry/2.png', alt: 'Cyberw3b Festival', description: 'blablablalba', width: 448, height: 224 },
  { src: '/masonry/3.png', alt: 'La Bitconf 2023', description: 'blablablalba', width: 208, height: 224 },
  { src: '/masonry/4.png', alt: 'Buenopalooza ', description: 'blablablalba', width: 256, height: 320 },
  { src: '/masonry/5.png', alt: 'Music NFT Workshop en Cali', description: 'blablablalba', width: 456, height: 256 },
  { src: '/masonry/6.png', alt: 'Virtuality 2023', description: 'blablablalba', width: 224, height: 224 },
  { src: '/masonry/7.png', alt: 'Charla en Resonancias Paralelas ', description: 'blablablalba', width: 224, height: 224 },
  { src: '/masonry/8.png', alt: 'Resonancias Paralelas Shows', description: 'blablablalba', width: 224, height: 224 },
  { src: '/masonry/9.png', alt: 'Resonancias Paralelas Expo', description: 'blablablalba', width: 224, height: 224 },
  { src: '/masonry/10.png', alt: 'Base Meetup Buenos Aires', description: 'blablablalba', width: 224, height: 224 },
  { src: '/masonry/11.png', alt: 'Songcamp Buenos Aires 2024', description: 'blablablalba', width: 224, height: 224 }
  // ...más imágenes
];

const Masonry = () => {
  return (
    <div className="p-5 md:p-10 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 [&>div]:mb-10">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout="responsive"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent group-hover:bg-black bg-opacity-0 group-hover:bg-opacity-70 p-4 transform translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 rounded opacity-0 group-hover:opacity-100">
            <h3 className="text-lg font-bold opacity-100">{image.alt}</h3>
            <p className="opacity-100">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
