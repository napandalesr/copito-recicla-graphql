"use client"

import { useRef } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import HomeContainer from "@/containers/Home";

export default function Home() {
  //const [current, setCurrent] = useState(0);
  
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const swiperRef = useRef<any>(null);
  return (
    <main className={"w-screen  lg:h-auto bg-[url(/images/bg.png)] bg-no-repeat bg-cover text-[#3C3C3B]"}>
      {/**
       * <Swiper
        keyboard
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={'auto'}
        scrollbar={{draggable: true}}
        navigation
        pagination={{clickable: true}}
        allowSlideNext
        mousewheel
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        className={`!min-h-screen flex`}
      >
       */}
      <Swiper
        keyboard
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={'auto'}
        scrollbar={{draggable: true}}
        navigation
        pagination={{clickable: true}}
        allowSlideNext
        mousewheel
        className={`!min-h-screen flex`}
      >
        {/*<button
        className={`fixed right-2 lg:right-10 z-30 bg-slate-500/30 rounded-lg backdrop-blur transition-all duration-300 ease-in-out ${current === 0 ? " top-20 lg:top-[25%]" : "top-[82vh] md:top-[88vh] lg:top-1/2"} ${current !== 2 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
        onClick={() => swiperRef.current.slideNext()}
        >
          <ArrowRightSquare size={30} color="#3C3C3B" className="text-[#3C3C3B]"></ArrowRightSquare>
        </button>*/}
        <SwiperSlide className="!w-screen relative !h-full">
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
