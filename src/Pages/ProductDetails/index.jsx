import React from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';


const ProductDetails = () => {
    return (
       <>
        <div className='!py-5'>
              <div className="container">
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        color="inherit"
        to="/"
        className="link transition !text-[14px]"
      >
        Home
      </Link>
      <Link
        underline="hover"
        color="inherit"
        to="/"
        className="link transition !text-[14px]"
      >
        Fashion
      </Link>

      <Link
        underline="hover"
        color="inherit"
        to="/"
        className="link transition !text-[14px]"
      >
       Blue Color Block T-shirt
      </Link>
      
    </Breadcrumbs>
  </div>
  
  

        </div>
        <section className='bg-white !py-5'>
        <div className='container flex gap-8'>
    <div className='productZoomContainer w-[40%]'>
      <ProductZoom/>
        
    </div>

    <div className='productContent w-[60%]'>
      <h1 className='text-[24px] font-[600] !mb-2'>Blue Color Block T-shirt</h1>
      <div className='flex items-center gap-3'>
        <span className='text-gray-400 text-[13px]'>Brands : <span className='font-[500] text-black opacity-75'>House of Chikankari</span></span>
      <Rating name="size-small" defaultValue={4} size='small' readOnly/>
      <span className='text-[13px] cursor-pointer'>Review (5)</span>
      </div>
      <div className='flex items-center gap-4 !mt-4'>
        <span className='oldPrice line-through !text-gray-500 !text-[20px] !font-[500]'>$58.00

        </span>
        <span className='price text-primary !text-[20px] !font-[600]'>$50.00</span>
        <span className='text-[14px]'>Available In Stock: <span className='text-green-600 text-[14px] font-bold'>147 Items</span></span>

    </div>
  
    <p className='!mt-3 !pr-10 !mb-5'>
    Refresh your casual wardrobe with this trendy blue color block T-shirt. Crafted from premium, breathable cotton, it offers all-day comfort and a relaxed fit. The bold color block design gives it a modern, sporty vibe that's perfect for everyday wear. Ideal for casual outings, weekend getaways, or just chilling at home. Pair it effortlessly with jeans, joggers, or shorts for a laid-back yet stylish look. Durable stitching and high-quality fabric ensure it stays fresh after multiple washes.</p>
      
      <div className='flex items-center !gap-3'>
        <span className='text-[16px]'>Size:</span>
      </div>
      </div>
    
    

  </div>

        </section>
       </>
    )

} 

export default  ProductDetails;