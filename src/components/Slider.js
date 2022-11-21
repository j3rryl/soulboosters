// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import images
import woman from '../assets/images/page1-woman pic.png'
import poverty from '../assets/images/poverty and displacement.jpg'
import food from '../assets/images/not enough food.jpg'
import risks from '../assets/images/more healthrisks.jpg'
import plants from '../assets/images/loss of plants and animals.jpg'
import lamustory from '../assets/images/lamustory.jpg'
import lamupic from '../assets/images/lamupic.jpg'
import drought from '../assets/images/increased droughts.jpg'
import oceans1 from '../assets/images/hotter temperatures and rising oceans.jpg'
import oceans2 from '../assets/images/hotter temperatures and rising oceans pic3.jpg'
import oceans3 from '../assets/images/hotter temperatures and rising oceans pic2.jpg'





// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/swiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src={woman} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oceans1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oceans2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={drought} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
