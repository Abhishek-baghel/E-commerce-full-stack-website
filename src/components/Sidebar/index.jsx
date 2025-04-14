import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


export const Sidebar = () => {

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] =useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] =useState(true);
    const [isOpenIngredientFilter, setIsOpenIngredientFilter] =useState(true);

    return (
        <aside className='sidebar'>
            <div className="box">
                <h3 className="w-full !mt-4 !mb-3 text-[16px] font-[600] flex items-cente pr-5">Shop By Categories
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter===true? <FaAngleUp/>: <FaAngleDown/>
                        }
                        
                        </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                <div className = "scroll px-3 !pl-3 important relative -left-[13px]">
                <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Skin Care" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Fitness" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Herbal" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Ayurvedic" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                </div>
                </Collapse>
            </div>

            <div className="box">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-cente pr-5">Availability
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={()=>setIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {
                            isOpenCategoryFilter===true? <FaAngleUp/>: <FaAngleDown/>
                        }
                        
                        </Button>
                </h3>
                <Collapse isOpened={isOpenAvailFilter}>
                <div className = "scroll px-3 !pl-3 important relative -left-[13px]">
                <FormControlLabel control={<Checkbox size="small" />} label="Available (17)" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="In Stock (10)" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Not Available (3)" className="w-full" />
                
                </div>
                </Collapse>
            </div>


            <div className="box !mt-3">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-cente pr-5">Ingredient
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={()=>setIsOpenIngredientFilter(!isOpenIngredientFilter)}>
                        {
                            isOpenIngredientFilter===true? <FaAngleUp/>: <FaAngleDown/>
                        }
                        
                        </Button>
                </h3>
                <Collapse isOpened={isOpenIngredientFilter}>
                <div className = "scroll px-3 !pl-3 important relative -left-[13px]">
                <FormControlLabel control={<Checkbox size="small" />} label="Chandan (3)" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Haldi (5)" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Neem (9)" className="w-full" />
                
                </div>
                </Collapse>
            </div>


            <div className="box !mt-4">
                <h3 className="w-full !mb-3 text-[16px] font-[600] flex items-cente !pr-5">Fliter By Price
                    
                </h3>
                <RangeSlider/>
                <div className="!mt-3 flex !pt-1 !pb-1  priceRange">
                <span className="text-[13px]">
                    From: <strong className="text-dark">Rs: {100 }</strong>
                </span>
                <span className="m1-auto !pl-16 text-[13px]">
                    From: <strong className="text-dark">Rs: {5000}</strong>
                </span>
                </div>
                </div>

                <div className="box !mt-4">
                <h3 className="w-full !mb-3 text-[16px] font-[600] flex items-cente !pr-5">Fliter By Rating 
                </h3>
                
                <div className="w-full">
                <Rating name="size-small" defaultValue={5} size="small" readOnly />
                </div>
                
                <div className="w-full">
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div>
                
                <div className="w-full">
                <Rating name="size-small" defaultValue={3} size="small" readOnly />
                </div>

                <div className="w-full">
                <Rating name="size-small" defaultValue={2} size="small" readOnly />
                </div>

                <div className="w-full">
                <Rating name="size-small" defaultValue={1} size="small" readOnly />
                </div>
                
        </div>
        </aside>
    )
}

export default Sidebar;