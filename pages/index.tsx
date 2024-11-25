"use client"

import { useRef, useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { ArrowLeftSquare } from "react-bootstrap-icons";
import HomeContainer from "@/containers/Home";

export default function Home() {
  const [current, setCurrent] = useState(0);
  
  const swiperRef = useRef<any>(null);
  return (
    <main className={"w-screen min-h-full lg:h-auto bg-[url(/images/bg.png)] bg-no-repeat bg-cover text-[#3C3C3B]"}>
      <Swiper
        keyboard
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={'auto'}
        scrollbar={{draggable: true}}
        navigation
        pagination={{clickable: true}}
        allowSlideNext
        mousewheel
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        className={`!min-h-screen !w-screen !flex !flex-row`}
      >
        <button 
        className={`fixed left-2 lg:left-10 text-black/50 z-30 bg-slate-500/30 rounded-lg backdrop-blur transition-all duration-300 ease-in-out ${current === 0 ? "opacity-0 pointer-events-none select-none top-20 lg:top-1/2" : `${current === 2 ? "top-[89.5vh]" : "top-[82vh]" } md:top-[88vh] lg:top-1/2`}`}
        onClick={() => swiperRef.current.slidePrev()}>
          <ArrowLeftSquare size={30} color="#3C3C3B" className="text-[#3C3C3B]"/>
        </button>
        {/*<button
        className={`fixed right-2 lg:right-10 z-30 bg-slate-500/30 rounded-lg backdrop-blur transition-all duration-300 ease-in-out ${current === 0 ? " top-20 lg:top-[25%]" : "top-[82vh] md:top-[88vh] lg:top-1/2"} ${current !== 2 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
        onClick={() => swiperRef.current.slideNext()}
        >
          <ArrowRightSquare size={30} color="#3C3C3B" className="text-[#3C3C3B]"></ArrowRightSquare>
        </button>*/}
        <SwiperSlide className="!w-screen relative">
          {/*<section className={"flex items-end absolute right-12 lg:right-20 top-20 lg:top-[25%] italic gap-2 transition-all duration-200 ease-in-out"}>
            <button className={"px-2 py-1 rounded bg-white/60 backdrop-blur-xl font-semibold border border-gray-600 text-sm"}>Galería</button>
            <button className={"px-2 py-1 rounded bg-white/60 backdrop-blur-xl font-semibold border border-gray-600 text-sm"}>Noticias</button>
          </section>*/}
          <HomeContainer/>
        </SwiperSlide>
        {/*<SwiperSlide className="!w-screen !min-h-screen relative flex lg:block flex-col"></SwiperSlide>
        <SwiperSlide className="!w-screen !min-h-screen flex lg:block flex-col relative"></SwiperSlide>*/}
      </Swiper>
    </main>
  );
}
