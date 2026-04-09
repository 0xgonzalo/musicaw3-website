"use client"
import AboutBanner from "@/components/home/about-banner";
import DropsBanner from "@/components/home/drops-banner";
import EventsBanner from "@/components/home/events-banner";
import FoundersBanner from "@/components/home/founders-banner";
import HomeBanner from "@/components/home/home-banner";
import Carousel from "@/components/utils/carousel";
import OasisBanner from "@/components/home/oasis-banner";

import WowBanner from "@/components/home/wow-banner";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Global ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HomeBanner />
        <AboutBanner />
        <WowBanner />
        <Carousel />
        <OasisBanner />

        <EventsBanner />
        <DropsBanner />
        <FoundersBanner />
      </div>
    </main>
  );
}
