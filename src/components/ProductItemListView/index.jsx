import React from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";


const ProductItem = () => {
    return (
        <div className='ProductItem !shadow-lg rounded-md overflow-hidden border-1  border-[rgba(0,0,0,0.1)] flex item-center'>
            <div className="group imgWrapper w-[25%] h-[220px] overflow-hidden rounded-md relative">
           <Link to="/">
           <div className='img  h-[220px] overflow-hidden '>
           <img src="ww1.jpeg" className='w-full'/>
           <img src="ww2.jpeg" className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100'/>
           </div> 
           </Link>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]' >10%</span>
            <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100 group-hover:scale-105">

            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white  group transition">
                <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
            </Button>

            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white  group transition">
                <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
            </Button>

            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white  group transition">
                <FaRegHeart  className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
            </Button>

            </div>
            </div>

            <div className="info !p-6 !py-5 px-8 w-[75%] ">
    <h6 className="!text-[15px] !font-[400]">
        <Link to="/" className="link transition-all ">
            Soylent Green
        </Link>
    </h6>
    <h3 className="!text-[18px] !title !mt-2 !mb-2 font-[500] !mb-1 text-[#000]">
        <Link to="/" className="link transition-all">
            Siril Georgette Pink Color Saree with Blouse piece
        </Link>
    </h3>

    <p className="text-[14px] mb-2 ">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
    
    <Rating name="size-small" defaultValue={2} size="small" readOnly />

    <div className='flex items-center gap-4'>
        <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00

        </span>
        <span className='price text-primary text-[15px] font-[600]'>$50.00</span>

    </div>
    <Button className="btn-org !mt-1 flex gap-2"><BsCart3 className="text-[20px]"/>Add to Cart</Button>
</div>
</div>
    );
};

export default ProductItem;
