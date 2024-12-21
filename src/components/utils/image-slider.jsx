'use client';
import { useState, useEffect, useRef } from 'react';
 /**
  * Image slider que se adapta al tamaño del contenedor.
  * Los hijos aparecen en display absolute sobre las imágenes de fondo
  * @param { images, children, filter, auto} 
  * @returns JSX.Element
  */
export default function ImageSlider({ images=[], children, filter=false, auto=true, showText=false }) {

  const [imageIndex, setImageIndex] = useState(0);
  const tiempoTransicion = 7000;
  const totalImages = images.length;
  const intervalID = useRef();

  function atras() {
    setImageIndex(prevIndex => (prevIndex > 0 ? prevIndex : totalImages) - 1);
  }

  function adelante() {
    setImageIndex(prevIndex => (prevIndex + 1) % totalImages);
  }

  function flecha(direccion) {
    // clearInterval(intervalID.current);
    direccion == "adelante" ? adelante() : atras();
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

  return(
    <div className="relative w-full h-full">
      <div className="flex flex-row w-full h-full ">
        {
          images.map(
            (image, i) => (
              <img className={`object-contain object-center w-full h-full block shrink-0 grow-0 transition duration-700 ease-in-out`}
                   style={{ transform: `translate(${imageIndex * -100}%)` }}
                   src={image.source}
                   key={i}
                   />
            )
          )
        }
      </div>
      <img className="object-cover block w-full h-full" />
      <button className="absolute block top-[50%] left-[3%] text-4xl opacity-80 hover:scale-[1.1] hover:opacity-100 transition duration-200 z-30 -translate-y-[50%]" onClick={() => flecha("atras")}> <img src="/img/icons/left_arrow.png" /> </button>
			<button className="absolute block top-[50%] right-[3%] text-4xl opacity-80 hover:scale-[1.1] hover:opacity-100 transition duration-200 z-30 -translate-y-[50%]" onClick={() => flecha("adelante")}> <img src="/img/icons/right_arrow.png" /> </button>
    </div>
  );
}