import React, { useState } from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomecatSlider from '../../components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';

import HomeSliderV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/bannerBoxV2';

const Home = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);   
    };

    return (
        <>
               <HomeSlider /> 

             <section className='!py-6 !pl-2'>
                <div className="container flex gap-4">
                <div className='part1 w-[66%]'>
               <HomeSliderV2/> 
                </div>
                <div className='part2 w-[34%] !pl-5  gap-1 flex items-center justify-between flex-col'>
                    <BannerBoxV2 info="left" image={'1741664496923_1737020250515_New_Project_47.jpg'}/>
                    <BannerBoxV2 nfo="right" image={'1741664665391_1741497254110_New_Project_50.jpg'}/>
                </div>
                    </div>
             </section>
            <HomecatSlider />

            <section className="bg-white !py-8 !mt-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className='text-[20px] font-[600] !pl-2'>Popular Products</h2>
                            <p className='text-[14px] font-[400] !pl-2'>Do not miss this current offers until the end of this month.</p>
                        </div>

                        <div className='rightSec w-[60%]'>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Beauty" sx={{ "&.Mui-selected": { color: "#ff5252" } }} />
                                <Tab label="skinCare" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Wellness" sx={{ "&.Mui-selected": { color: "#ff5252" } }} />
                                <Tab label="Fitness" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Ayurvedic" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Herbal" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Cosmetics"sx={{ "&.Mui-selected": { color: "#ff5252" } }} />
                                <Tab label="HairCare" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Fragrance" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                
                            </Tabs>
                        </div>
                    </div>

                    <ProductsSlider items={6}/>



                </div>
            </section>

            <section className="!py-4 !pt-2 bg-white w-full min-h-[50px] !mt-0 !p-0">
                <div className="container !pt-0 !pb-3 !pr-4 !pl-4">
                    <div className="freeShipping w-[80%] !m-auto !py-3 !p-4 border-2 border-[#ff5252] flex items-center
                        justify-between rounded-md !mb-11">
                        <div className="col1 flex items-center gap-4">
                            <FaShippingFast className="text-[50px]" />
                            <span className="text-[20px] font-[600] uppercase">Affordable & Quick Shipping</span>
                        </div>

                        <div className="col2">
                            <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and Over $200</p>
                        </div>

                        <p className='font-bold text-[25px]'>- Only $200*</p>
                    </div>

                    <AdsBannerSliderV2 items={4} />
                </div>
            </section>

            <section className='py-5 !pt-0 bg-white' >
                <div className='container'>
                <h2 className='text-[20px] font-[600] !pl-2'>Latest Products</h2>
                    <ProductsSlider items={6}/>
                    <AdsBannerSlider items={3} />
                </div>
            </section>

            <section className='py-5 !pt-7 bg-white' >
                <div className='container'>
                <h2 className='text-[20px] font-[600] !pl-2'>Featured Products</h2>
                    <ProductsSlider items={6}/>
                    <AdsBannerSlider items={3} />
                    
                </div>
            </section>

            <section className='py-5 !pb-8 !pt-0 bg-white blogSection' >
                <div className='container'>
                <h2 className='text-[20px] font-[600]  !pt-7  !pl-2'>From The Blog</h2>
                    <Swiper
                                        slidesPerView={4}
                                        spaceBetween={30}
                                        navigation={true}
                                        modules={[Navigation]}
                                        className="sliderHome" /*sliderHome write in classname instead of mySwiper*/
                                    >
                                        <SwiperSlide><BlogItem/>
                                            </SwiperSlide>
                                            
                                            <SwiperSlide><BlogItem/>
                                            </SwiperSlide>

                                            <SwiperSlide><BlogItem/>
                                            </SwiperSlide>    

                                            <SwiperSlide><BlogItem/>
                                            </SwiperSlide>

                                            <SwiperSlide><BlogItem/>
                                            </SwiperSlide>

                                            <SwiperSlide><BlogItem/>
                                            </SwiperSlide>
                                            
                                            
                                            
                                            
                                             </Swiper>

                                             
                
                </div>
            </section>



        </>
    );
}

export default Home;
