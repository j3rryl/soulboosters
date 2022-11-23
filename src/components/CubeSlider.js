// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../assets/css/cubeslider.css";

// import required modules
import { Autoplay, EffectCube } from "swiper";



export default function CubeSlider({images, timer}) {
  return (
    <>
      <Swiper
        
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: timer,
          disableOnInteraction: false,
      }}
        loop={true}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images[0]} alt="Pics for counties."/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} alt="Pics for counties."/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} alt="Pics for counties."/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]} alt="Pics for counties."/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
