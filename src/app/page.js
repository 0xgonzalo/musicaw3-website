"use client"
import AboutBanner from "@/components/home/about-banner";
import DropsBanner from "@/components/home/drops-banner";
import EventsBanner from "@/components/home/events-banner";
import FoundersBanner from "@/components/home/founders-banner";
import HomeBanner from "@/components/home/home-banner";
import Carousel from "@/components/utils/carousel";
import AudioPlayer from "@/components/utils/Player/AudioPlayer";
import songsdata from "@/components/utils/Player/audios.js";
import { useRef, useState, useEffect } from 'react';
import OasisBanner from "@/components/home/oasis-banner";
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="min-w-screen max-w-screen overflow-hidden h-full flex flex-col items-center">
        <HomeBanner />
        <AboutBanner />
        <Carousel />
        <OasisBanner />
        <EventsBanner />
        <DropsBanner />
        <FoundersBanner />
        {/* <audio src='/audios/viajerito1.mp3' ref={audioElem} onTimeUpdate={onPlaying} />
        <AudioPlayer songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} /> */}

      </div>      
    </main>
  );
}
