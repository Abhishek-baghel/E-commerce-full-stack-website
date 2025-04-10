import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {

    return (
      <div className="homeSlider py-4 !mt-4.5 !pr-1 !pl-1">
        <div className="container" >
        <Swiper
        loop={true}
        spaceBetween={20} navigation={true} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}modules={[Navigation, Autoplay]} className="sliderHome">

<SwiperSlide>
  <div className="item rounded-[20px] overflow-hidden">
  <img src="file_1734524878924_1721277298204_banner (2).jpg" alt="Banner Slide" className="w-full"/></div>
</SwiperSlide>

<SwiperSlide>
<div className="item rounded-[20px] overflow-hidden">
  <img src="file_1734524930884_NewProject(6) (1).jpg" alt="Banner Slide" className="w-full"/></div>
</SwiperSlide>

<SwiperSlide>
<div className="item rounded-[20px] overflow-hidden">
  <img src="abcdd.jpg" alt="Banner Slide" className="w-full"/></div>
</SwiperSlide>

<SwiperSlide>
<div className="item rounded-[20px] overflow-hidden">
  <img src="file_1734524971122_NewProject(8) (1).jpg" alt="Banner Slide" className="w-full"/></div>
</SwiperSlide>

<SwiperSlide>
<div className="item rounded-[20px] overflow-hidden">
  <img src="file_1734524985581_NewProject(11) (1) (1).jpg" alt="Banner Slide" className="w-full"/></div>
</SwiperSlide>

<SwiperSlide>
<div className="item rounded-[20px] overflow-hidden">
  <img src="file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c (1).jpg" alt="Banner Slide" className="w-full"/></div>
</SwiperSlide>

<SwiperSlide>
<div className="item rounded-[20px] overflow-hidden">
  <img src="file_1734525014348_NewProject(7) (2).jpg" alt="Banner Slide" className="w-full"/></div>

</SwiperSlide>


</Swiper>

        </div>
      </div>

    );
};

export default HomeSlider;