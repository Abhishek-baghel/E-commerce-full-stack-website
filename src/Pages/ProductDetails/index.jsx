import React from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useState } from "react";
import { QtyBox } from '../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa6';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import { ProductDetailsComponent } from '../../components/ProductDetails';


const ProductDetails = () => {

const [activeTab, setActiveTab] = useState(0);

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
       Modern Blue Color Block Tee
      </Link>
      
    </Breadcrumbs>
  </div>

        </div>
        <section className='bg-white !py-5'>
        <div className='container flex gap-8 items-center'>
    <div className='productZoomContainer w-[40%]'>
      <ProductZoom/>
        
    </div>

    <div className='productContent w-[60%] !pr-10 !pl-10'>
      <ProductDetailsComponent/>

      </div>
    
    

  </div>


  <div className="container !pt-10">
    <div className="flex items-center gap-8 !mb-5">
      <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 ? 'text-primary' : ''}`}
        onClick={()=> setActiveTab(0)}>Description</span>
      <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 ? 'text-primary' : ''}`}
        onClick={()=> setActiveTab(1)}>Product Details</span>
      <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 ? 'text-primary' : ''}`}
        onClick={()=> setActiveTab(2)}>Reviews (4)</span>

    </div>

      {
        activeTab === 0 && (
        <div className="!shadow-md !w-full !py-5 !px-8 rounded-md">
        <p>Experience the perfect blend of quality, performance, and style with our [Product Name]. Crafted using premium materials, this product is designed to deliver long-lasting durability and comfort. Whether you're at home, at work, or on the go, [Product Name] offers unmatched functionality with a sleek, modern design that complements your lifestyle. Easy to use and maintain, it's ideal for everyday use and makes a great gift for loved ones. Elevate your experience today with a product that truly stands out.
        </p>
        
        <h4>Light Weight Product</h4>

        <p>Discover a new standard of excellence with the [Product Name]. Meticulously engineered and thoughtfully designed, this product brings together advanced technology and refined aesthetics to elevate your daily routine. Whether you're upgrading your essentials or gifting someone special, the [Product Name] delivers a seamless experience with uncompromising quality.
        </p>
        
        <h4>Free Shipping & Return</h4>

        <p>Designed for everyday excellence, the [Product Name] combines durability, comfort, and style in one sleek package. Whether you're at home, work, or on the move, this product is built to keep up with your lifestyle.
        </p>
        
        <h4>Money Back Guarantee</h4>

        <p>Say goodbye to compromises. The [Product Name] offers everything you need—ease of use, top-tier quality, and a modern aesthetic that fits right in with your daily routine. Built for those who expect more.
        </p>
        
        <h4>Online Support</h4>

        <p>Gentle on you, tough on results—[Product Name] is powered by natural ingredients to support your well-being. Perfect for those who want clean, effective care without the harsh stuff.
        </p>

      </div>
      )}

      {
        activeTab === 1 && (
          
    <div className="!shadow-md !w-full !py-5 !px-8 rounded-md">
      <div className="relative overflow-x-auto ">
  <table className="w-full text-sm text-left text-gray-700 bg-white border border-gray-200">
    <thead className="text-xs uppercase bg-gray-100 text-gray-600">
      <tr>
        <th scope="col" className="!px-6 !py-3 !border-b border-gray-200">
          STAND UP
        </th>
        <th scope="col" className="!px-6 !py-3 !border-b border-gray-200">
          FOLDED (W/O WHEELS)
        </th>
        <th scope="col" className="!px-6 !py-3 !border-b border-gray-200">
        FOLDED (W/O WHEELS)
        </th>
        <th scope="col" className="!px-6 !py-3 !border-b border-gray-200">
          DOOR PASS THROUGH
        </th>
      </tr>
    </thead>
    <tbody>

      <tr className="!border-b border-gray-200">
      <td class="!px-6 !py-4 font-[500]">
          35"L x 24"W x 30"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          30"L x 20"W x 18"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          26.5"L x 16"W x 16"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          18"L x 12"W x 12"H  
        </td>
      </tr>

      <tr className="!border-b border-gray-200">
      <td class="!px-6 !py-4 font-[500]">
          35"L x 24"W x 30"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          30"L x 20"W x 18"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          26.5"L x 16"W x 16"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          18"L x 12"W x 12"H  
        </td>
      </tr>

      <tr className="!border-b border-gray-200">
      <td className="!px-6 !py-4 font-[500]">
          35"L x 24"W x 30"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          30"L x 20"W x 18"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          26.5"L x 16"W x 16"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          18"L x 12"W x 12"H  
        </td>
      </tr>

      <tr className="!border-b border-gray-200">
      <td class="!px-6 !py-4 font-[500]">
          35"L x 24"W x 30"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          30"L x 20"W x 18"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          26.5"L x 16"W x 16"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          18"L x 12"W x 12"H  
        </td>
      </tr>

      <tr className="!border-b border-gray-200">
      <td className="!px-6 !py-4 font-[500]">
          35"L x 24"W x 30"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          30"L x 20"W x 18"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          26.5"L x 16"W x 16"H
        </td>
        <td className="!px-6 !py-4 font-[500]">
          18"L x 12"W x 12"H  
        </td>
      </tr>
      
    </tbody>
  </table>
  </div>
  </div>
      )}

      {
        activeTab === 2 && (
        <div className="!shadow-md !w-[80%] !py-5 !px-8 rounded-md">
        <div className="w-full productReviewsContainer">
          <h2 className="text-[18px]">Customer questions & answers</h2>

          
            <div className="review !pt-5 !pb-5 !border-b !border-[rgba(0,0,0,0.1)] !w-full flex items-center justify-between">
            <div className="info w-[60%] flex items-center gap-3">
              <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="w-full"/>
              </div>
              <div className="w-[80%]">
                <h4 className="text-[16px]">Rinku Verma</h4>
                <h5 className="text-[13px] !mb-0">2025-02-22</h5>
                <p className="!mt-0 !mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <Rating name="size-small" defaultValue={4} size='small' readOnly/>
            </div>

            <div className="review !pt-5 !pb-5 !border-b !border-[rgba(0,0,0,0.1)] !w-full flex items-center justify-between">
            <div className="info w-[60%] flex items-center gap-3">
              <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="w-full"/>
              </div>
              <div className="w-[80%]">
                <h4 className="text-[16px]">Rinku Verma</h4>
                <h5 className="text-[13px] !mb-0">2025-02-22</h5>
                <p className="!mt-0 !mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <Rating name="size-small" defaultValue={4} size='small' readOnly/>
            </div>

            <div className="review !pt-5 !pb-5 !border-b !border-[rgba(0,0,0,0.1)] !w-full flex items-center justify-between">
            <div className="info w-[60%] flex items-center gap-3">
              <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="w-full"/>
              </div>
              <div className="w-[80%]">
                <h4 className="text-[16px]">Rinku Verma</h4>
                <h5 className="text-[13px] !mb-0">2025-02-22</h5>
                <p className="!mt-0 !mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <Rating name="size-small" defaultValue={4} size='small' readOnly/>
            </div>


            <br/>
            <div className="Review Form bg-[#fafafa] !p-4 !rounded-md">
              <h2 className="!text-[18px]">Add a Review</h2>

              <form className="!w-full !mt-5">
              <TextField
                id="outlined-multiline-flexible"
                label="Write a Review..."
                className="!w-full"
                multiline
                rows={5}
                />
                <br/> <br/>
              <Rating name="size-small" defaultValue={4} size='small'/>

              <div className="flex items-center !mt-5">
                <Button className="btn-org">Submit Review</Button>
              </div>
              </form>

            </div>
            

          
        </div>
        </div>  
      )}
  </div>

      <div className="container !pt-8">
      <h2 className='text-[20px] font-[600] !pl-2 !pb-0'>Related Products</h2>
      <ProductsSlider items={6}/>
      </div>

        </section>
       </>
    )

} 

export default  ProductDetails;