import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';


const MyListItems = (props) => {  

    

  return (
    <div className="cartItem !w-full !p-3 flex items-center gap-4 !pb-5 !border-b !border-b-[rgba(0,0,0,0.1)]">
                    <div className="img !w-[15%] rounded-md overflow-hidden">
                        <Link to="/product/7845" className="group">
                        <img src="https://www.jiomart.com/images/product/original/443012090_green/quilted-zip-front-crop-gillet-model4-443012090_green-4-202309141728.jpg?im=Resize=(600,750)" className="!w-full group-hover:scale-105 transition-all" />
                        </Link>
                    </div>

                    <div className="info !w-[85%] !relative">
                    <IoClose className="cursor-pointer absolute !top-[0px] !right-[0px] !font-[22px] !text-[18px] link transition-all"/>
                        <span className="!text-[13px]">House of Chikankari</span>
                        <h3 className="!text-[15px]"><Link className="link">Modern Blue Color Block Tee – Relaxed Fit</Link></h3>

                        <Rating name="size-small" defaultValue={2} size="small" readOnly />

                        
                        
                        <div className='flex items-center gap-4 !mt-2 !mb-2'>
                        <span className='price !text-[14px] !font-[600]'>$50.00</span>
                        <span className='oldPrice line-through !text-gray-500 !text-[14px] !font-[500]'>$58.00</span>
                        <span className='price text-primary !text-[14px] !font-[600]'>56% OFF</span>
                        </div>

                      

                        <Button className="btn-org btn-sm">Add to Cart</Button>

                    </div>
                </div>
  )
}

export default MyListItems;