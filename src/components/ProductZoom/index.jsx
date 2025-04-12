import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ProductZoom = () => { 
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };


  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
           <Swiper
           ref={zoomSliderSml}
                              direction={"vertical"}
                              slidesPerView={5}
                              spaceBetween={0}
                              navigation={true}
                              modules={[Navigation]}
                              className="zoomProductSliderThumbs h-[500px] overflow-hidden" /*sliderHome write in classname instead of mySwiper*/
                          >
                            <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>

                                <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model4-443012090_green-4-202309141728.jpg?im=Resize=(600,750)" className="w-full transition-all group-hover:scale-105"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                                <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model5-443012090_green-5-202309141727.jpg?im=Resize=(75,94)" className="w-full transition-all group-hover:scale-105"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                                <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model3-443012090_green-3-202309141728.jpg?im=Resize=(600,750)" className="w-full transition-all group-hover:scale-105"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                                <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model-443012090_green-0-202309141728.jpg?im=Resize=(1000,1000)" className="w-full transition-all group-hover:scale-105"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(4)}>
                                <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model2-443012090_green-2-202309141728.jpg?im=Resize=(600,750)"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 5 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(5)}>
                                <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model6-443012090_green-6-202309141728.jpg?im=Resize=(600,750)"/>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide></SwiperSlide>
                            
                          </Swiper>
        </div>

        
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
        <Swiper
                             
                             ref={zoomSliderBig} 
                             slidesPerView={1}
                              spaceBetween={10}
                              navigation={false}
                          
                          >
      <SwiperSlide>
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        src={"https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model4-443012090_green-4-202309141728.jpg?im=Resize=(600,750)"
        }/>
      </SwiperSlide>

      <SwiperSlide>
  <InnerImageZoom
    zoomType="hover"
    zoomScale={1}
    src={"https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model5-443012090_green-5-202309141727.jpg?im=Resize=(600,750)"
    }/>
</SwiperSlide>

      <SwiperSlide>
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        src={"https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model3-443012090_green-3-202309141728.jpg?im=Resize=(600,750)"
        }/>
      </SwiperSlide>

      <SwiperSlide>
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        src={"https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model-443012090_green-0-202309141728.jpg?im=Resize=(1000,1000)"
        }/>
      </SwiperSlide>

      <SwiperSlide>
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        src={"https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model2-443012090_green-2-202309141728.jpg?im=Resize=(600,750)"
        }/>
      </SwiperSlide>

      <SwiperSlide>
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        src={"https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model6-443012090_green-6-202309141728.jpg?im=Resize=(600,750)"
        }/>
      </SwiperSlide>
      
      </Swiper>
        </div>
      
   
      </div>
      </>
  );
};

export default ProductZoom; 