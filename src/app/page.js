import AboutBanner from "@/components/home/about-banner";
import HomeBanner from "@/components/home/home-banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="min-w-screen max-w-screen overflow-hidden h-full flex flex-col items-center">
        <HomeBanner />
        <AboutBanner />
      </div>      
    </main>
  );
}
