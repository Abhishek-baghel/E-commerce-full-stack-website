import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const HomecatSlider = () => {
    return (
        <div className="pt-4 py-8 !important HomeCatSlider">


            <div className="container">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="sliderHome" /*sliderHome write in classname instead of mySwiper*/
                >
                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="oo.png" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Beauty</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="ww.png" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Skincare</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="zzz.png" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Wellness</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="bb.jpeg" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Fitness</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="aa.jpeg" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Ayurvedic</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="jj.jpg" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Herbal</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="kk.png" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Cosmetics</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="vv.png" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">HairCare</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item !py-7 !px-3 !mt-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src="rrrr.png" className="w-[60px] zoom-img transition-all duration-300 hover:scale-110" alt="Zoom Image" />
                                <h3 className="text-[15px] font-[500] !mt-3">Fragrance</h3>    
                            </div>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default HomecatSlider;
