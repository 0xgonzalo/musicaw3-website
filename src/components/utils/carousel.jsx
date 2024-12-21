import ImageCarousel from "../utils/image-carousel/image-carousel";
import ImageSlider from "../utils/image-slider";

export default function Carousel() {
  const images = [
    {
      source: "/carousel/1.jpg",
      title: "MusicaW3 Speakers"
    },
    {
      source: "/carousel/2.jpg",
      title: "MusicaW3 artistas"
    },
    {
      source: "/carousel/3.jpg",
      title: "MusicaW3 listening point"
    },
    {
      source: "/carousel/4.jpg",
      title: "Evento MusicaW3"
    },
    {
      source: "/carousel/10.jpg",
      title: "MusicaW3 listening point"
    },
    {
      source: "/carousel/9.jpg",
      title: "MusicaW3 listening point"
    },
    {
      source: "/carousel/12.jpg",
      title: "MusicaW3 listening point"
    }
  ]

  const images2 = [
    {
      source: "/carousel/5.jpg",
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
      source: "/carousel/8.jpg",
      title: "MusicaW3 at the studio"
    },
    {
      source: "/carousel/11.jpg",
      title: "MusicaW3 at the studio"
    },
    {
      source: "/carousel/13.jpg",
      title: "MusicaW3 at the studio"
    }
  ]

  return(
    <div className="w-screen py-12 overflow-hidden">
      <div className="hidden md:block w-full">
        <ImageCarousel images={images} />
      </div>
      <div className="block md:hidden pb-4">
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