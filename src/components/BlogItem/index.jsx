import React from 'react';
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
    return (
        <div className='blogItem group !mt-4'>
            <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer'>
               <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt='blog image'/>
         <span className='flex items-center justify-center text-white absolute bottom-[140px] right-[15px] z-50 bg-primary rounded-md p-1 gap-1 text-[12px] font-[500]'> 
         <IoMdTime className='text-[16px] '/> 5 April, 2024
         </span>

            </div>
<div className='info !py-3 '>
    <h2 className='text-[15px] font-[600] text-black'>
       <Link to='/' className='link'> Nullam ullaamcarper ornare molrestie  </Link>
    </h2>
    <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] !mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    <Link className='link font-[500] text-[14px] flex items-center gap-1 '>Read More<IoIosArrowForward/></Link>
</div>

        </div>
    )
}

export default BlogItem;