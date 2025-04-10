import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBox from '../bannerBox';

export const AdsBannerSlider = (props) => {
    return (
        <div className='py-4 w-full'>
        <Swiper
                            slidesPerView={props.items}
                            spaceBetween={10}
                            navigation={true}
                            modules={[Navigation]}
                            className="smlBtn" /*sliderHome write in classname instead of mySwiper*/
                        >
                            <SwiperSlide>
                                <BannerBox img= {"/jio1.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio2.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio3.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio4.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio1.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio2.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio3.jpg"} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBox img= {"/jio4.jpg"} link={'/'}/>
                                </SwiperSlide>
                            </Swiper>
        </div>

    )
}
export default AdsBannerSlider;