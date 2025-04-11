import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ProductZoom = () => { 
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[20%]">
           <Swiper
                              direction={"vertical"}
                              slidesPerView={4}
                              spaceBetween={10}
                              navigation={true}
                              modules={[Navigation]}
                              className="zoomProductSliderThumbs h-[490px] overflow-hidden" /*sliderHome write in classname instead of mySwiper*/
                          >
                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="item">
                                <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg"/>
                              </div>
                            </SwiperSlide>

                          </Swiper>
        </div>

        
        <div className="zoomContainer w-[80%] h-[500px] overflow-hidden">
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
      />
        </div>
      
   
      </div>
      </>
  );
};

export default ProductZoom; 