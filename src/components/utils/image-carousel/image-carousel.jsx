'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './image-carousel.module.css';
import { ArrowLeft, ArrowRight } from '../icons';
 /**
  * Image slider que se adapta al tamaño del contenedor.
  * Los hijos aparecen en display absolute sobre las imágenes de fondo
  * @param { images, children, filter, auto} 
  * @returns JSX.Element
  */
export default function ImageCarousel({ images=[],
                                        displayText=false,
                                        children,
                                        auto=true }) {
  const carousel = useRef();                                        
  const [imageIndex, setImageIndex] = useState(0);
  const totalImages = images.length;
  const step = 500;
  const tiempoTransicion = 7000;
  const intervalID = useRef();
  console.log(styles)
  function atras() {
    setImageIndex(prevIndex => (prevIndex > 0 ? prevIndex : totalImages) - 1);
    carousel.current.scrollLeft -= step;
    if(carousel.current.scrollLeft === 0) {
      // carousel.current.classList.add(styles.notransition);
      carousel.current.scrollLeft = carousel.current.scrollWidth;
      // carousel.current.classList.remove(styles.notransition);
    }
  }

  function adelante() {
    setImageIndex(prevIndex => (prevIndex + 1) % totalImages);
    carousel.current.scrollLeft += step;
    // El total del width menos lo visible es lo scrolleado (scrollLeft)
    if(Math.ceil(carousel.current.scrollLeft) == (carousel.current.scrollWidth - carousel.current.offsetWidth)) {
      // carousel.current.classList.add(styles.notransition);
      carousel.current.scrollLeft = 0;
      // carousel.current.classList.remove(styles.notransition);
    }
  }

  function flecha(direccion) {
    direccion == "adelante" ? adelante() : atras();
  }

  return(
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-12">
      <div  className={styles.carousel}
            ref={carousel}
            >
        {
          images.map(
            (image, i) => (
              <img className={` object-cover object-center
                                w-full h-full
                                block shrink-0 grow-0
                                cursor-pointer p-4`}
                    src={image.source}
                    key={i}
                    />
            )
          )
        }
      </div>
      <button className="absolute block top-[50%] left-[3%] text-4xl opacity-80 hover:scale-[1.1] hover:opacity-100 transition duration-200 z-30 -translate-y-[50%]" onClick={() => flecha("atras")}> <ArrowLeft /> </button>
			<button className="absolute block top-[50%] right-[3%] text-4xl opacity-80 hover:scale-[1.1] hover:opacity-100 transition duration-200 z-30 -translate-y-[50%]" onClick={() => flecha("adelante")}> <ArrowRight/> </button>
      <div className="absolute w-full flex flex-col items-center gap-y-14 md:gap-y-12 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
        { displayText && <h1 className="w-full text-4xl md:text-[64px] text-center font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }}>{images[imageIndex].title}</h1> }
        { children }
      </div>
    </div>
  );
}


  // useEffect(
  //   () => {
  //     if (auto) {
  //       let id = setInterval(adelante, tiempoTransicion);
  //       intervalID.current = id;
  //       return () => clearInterval(id);
  //     }
  //   }
  //  , []);