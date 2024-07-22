import AboutBanner from "@/components/home/about-banner";
import EventsBanner from "@/components/home/events-banner";
import HomeBanner from "@/components/home/home-banner";
import Carousel from "@/components/utils/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="min-w-screen max-w-screen overflow-hidden h-full flex flex-col items-center">
        <HomeBanner />
        <AboutBanner />
        <Carousel />
        <EventsBanner />
      </div>      
    </main>
  );
}
