import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from "@mui/material/Button";

const HomeSliderV2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
        loop={true}
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="sliderHome"
           
        >
            <SwiperSlide>
                <div className='items w-full rounded-md overflow-hidden'>
                    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
                    <div className={`info absolute top-0 -right-[100%] opacity-0 transition-all duration-700 w-[50%] h-[100%] z-50 !p-8 flex items-center flex-col justify-center`}>
                        <h4 className='text-[18px] font-[500] w-full text-left !mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                        <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Women Solid Round Green T-Shirt</h2>
                        <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left !mt-3 !mb-3 relative -right-[100%] opacity-0'>Starting At Only
                            <span className='text-primary text-[30px] font-[700]'>$59.00</span>
                        </h3>
                        <div className='w-full relative -right-[100%] opacity-0 btn_'>
                            <Button className='btn-org '>SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='items w-full rounded-md overflow-hidden relative'> {/* Make the image container relative */}
    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" className="block w-full h-auto" /> {/* Ensure image takes full width */}
    <div className={`info absolute top-0 -right-[100%] opacity-0 transition-all duration-700 w-[50%] h-[100%] z-50 !p-8 flex items-center flex-col justify-center`}>
                        <h4 className='text-[18px] font-[500] w-full text-left !mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                        <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Buy Modern Chair In 
                            Black Color
                        </h2>
                        <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left !mt-3 !mb-3 relative -right-[100%] opacity-0'>Starting At Only
                            <span className='text-primary text-[30px] font-[700]'>$99.00</span>
                        </h3>
                        <div className='w-full relative -right-[100%] opacity-0 btn_'>
                            <Button className='btn-org '>SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default HomeSliderV2;
