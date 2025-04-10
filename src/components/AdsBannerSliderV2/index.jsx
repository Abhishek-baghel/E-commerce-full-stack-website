import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBoxV2 from '../bannerBoxV2';

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
                                <BannerBoxV2  info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>

                                <SwiperSlide>
                                <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
                                </SwiperSlide>
                            </Swiper>
        </div>

    )
}
export default AdsBannerSlider;