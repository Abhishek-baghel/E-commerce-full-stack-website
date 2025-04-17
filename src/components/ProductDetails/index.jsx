import { Rating } from "@mui/material";
import React, { useState } from "react";
import { QtyBox } from "../QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Button from "@mui/material/Button";   


export const ProductDetailsComponent = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
  return (
  <>
   <h1 className='text-[24px] font-[600] !mb-2'>Modern Blue Color Block Tee – Relaxed Fit</h1>
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
        <div className="flex items-center gap-1 actions">
          <Button className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>50 ml</Button>
          <Button className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>100 ml</Button>
          <Button className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>150 ml</Button>
          <Button className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>200 ml</Button>
        </div>
      </div>
      <p className='text-[14px] !mt-5 !mb-2 text-[#000]'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
      <div className='flex items-center gap-4 !py-4'>
        <div className='qtyBoxWrapper w-[70px]'>
        <QtyBox/>
        </div>

        <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[22px]' />Add to Cart</Button>
      </div>



      <div className="flex items-center gap-4 !mt-4">
  <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
    <FaRegHeart className='text-[18px]'/> Add to Wishlist
  </span>

  <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
    <IoGitCompare className='text-[18px]'/> Add to Compare
  </span>
</div>
  </>
   
  )
}

export default ProductDetailsComponent;
