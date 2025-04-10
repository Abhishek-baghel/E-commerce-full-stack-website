import React from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from 'react-router-dom';




const ProductDetails = () => {
    return (
        <section>
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
    </Breadcrumbs>
  </div>
  
  <div className='container flex gap-4'>
    <div className='productZoomContainer'>
      <ProductZoom/>
        
    </div>

  </div>


        </section>
    )

} 

export default  ProductDetails;