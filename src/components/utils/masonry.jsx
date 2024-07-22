// components/MasonryLayout.js
import Image from 'next/image';

const images = [
  // Agrega tus imágenes aquí con sus URLs y tamaños
  { src: '/masonry/1.png', alt: 'flyer musicaw3 event', width: 384, height: 384 },
  { src: '/masonry/2.png', alt: 'flyer musicaw3 event', width: 448, height: 224 },
  { src: '/masonry/3.png', alt: 'flyer musicaw3 event', width: 208, height: 224 },
  { src: '/masonry/4.png', alt: 'flyer musicaw3 event', width: 256, height: 320 },
  { src: '/masonry/5.png', alt: 'flyer musicaw3 event', width: 456, height: 256 },
  { src: '/masonry/6.png', alt: 'flyer musicaw3 event', width: 224, height: 224 },
  // ...más imágenes
];

const Masonry = () => {
  return (
    <div className="masonry-grid">
      {images.map((image, index) => (
        <div key={index} className="masonry-item">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
