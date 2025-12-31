import ImageCarousel from "../utils/image-carousel/image-carousel";
import ImageSlider from "../utils/image-slider";

export default function Carousel() {
  const images = [
    { source: "/carousel/1.jpg", title: "MusicaW3 Speakers" },
    { source: "/carousel/2.jpg", title: "MusicaW3 artistas" },
    { source: "/carousel/3.jpg", title: "MusicaW3 listening point" },
    { source: "/carousel/4.jpg", title: "Evento MusicaW3" },
    { source: "/carousel/10.jpg", title: "MusicaW3 listening point" },
    { source: "/carousel/9.jpg", title: "MusicaW3 listening point" },
    { source: "/carousel/12.jpg", title: "MusicaW3 listening point" }
  ]

  const images2 = [
    { source: "/carousel/5.jpg", title: "MusicaW3 playing piano" },
    { source: "/carousel/6.png", title: "MusicaW3 workshop" },
    { source: "/carousel/7.png", title: "MusicaW3 playing guitar" },
    { source: "/carousel/8.jpg", title: "MusicaW3 at the studio" },
    { source: "/carousel/11.jpg", title: "MusicaW3 at the studio" },
    { source: "/carousel/13.jpg", title: "MusicaW3 at the studio" }
  ]

  return(
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-darker/50 to-black" />

      <div className="relative">
        {/* Section header */}
        <div className="text-center mb-12 px-6">
          <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Galería
          </span>
          <h2 className="font-stretchFont text-3xl md:text-5xl section-heading">
            MOMENTOS
          </h2>
        </div>

        {/* Desktop Carousels */}
        <div className="hidden md:flex flex-col gap-8">
          <ImageCarousel images={images} />
          <ImageCarousel images={images2} />
        </div>

        {/* Mobile Sliders */}
        <div className="flex flex-col gap-6 md:hidden">
          <ImageSlider images={images} />
          <ImageSlider images={images2} />
        </div>
      </div>
    </section>
  );
}
