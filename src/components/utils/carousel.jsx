import ImageCarousel from "../utils/image-carousel/image-carousel";
import ImageSlider from "../utils/image-slider";

export default function Carousel() {
  const images = [
    {
      source: "/carousel/1.png",
      title: "MusicaW3 Speakers"
    },
    {
      source: "/carousel/2.png",
      title: "MusicaW3 artistas"
    },
    {
      source: "/carousel/3.png",
      title: "MusicaW3 listening point"
    },
    {
      source: "/carousel/4.png",
      title: "Evento MusicaW3"
    },
    {
      source: "/carousel/3.png",
      title: "MusicaW3 listening point"
    }
  ]

  const images2 = [
    {
      source: "/carousel/5.png",
      title: "MusicaW3 playing piano"
    },
    {
      source: "/carousel/6.png",
      title: "MusicaW3 workshop"
    },
    {
      source: "/carousel/7.png",
      title: "MusicaW3 playing guitar"
    },
    {
      source: "/carousel/8.png",
      title: "MusicaW3 at the studio"
    }
  ]

  return(
    <div className="w-screen py-12">
      <div className="hidden md:block w-full">
        <ImageCarousel images={images} />
      </div>
      <div className="block md:hidden">
        <ImageSlider images={images} />
      </div>
      <div className="hidden md:block w-full">
        <ImageCarousel images={images2} />
      </div>
      <div className="block md:hidden">
        <ImageSlider images={images2} />
      </div>
    </div>
    
  );
}