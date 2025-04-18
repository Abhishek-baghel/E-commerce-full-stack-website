import React, { useState } from 'react';
import MyListItems from './myListItems';
import Button from '@mui/material/Button';
import { RiShoppingBag3Line } from "react-icons/ri";

const MyList = () => {

    

  return (
    <section className='section !py-10 !pb-10'>
        <div className='container !w-[80%] !max-[80%] flex gap-5'>
            <div className="leftPart !w-[70%] !m-auto">
           
            <div className="shadow-md rounded-md bg-white">
            <div className="!py-2 !px-3 !border-b border-b-[rgba(0,0,0,0.1)]">
            <h2>My List</h2>
            <p className="!mt-0">There are <span className="font-bold !text-primary">6</span> products in your my list</p>
            </div>
                    <MyListItems/>
                    <MyListItems/>
                    <MyListItems/>
                    <MyListItems/>
                    <MyListItems/>
                    <MyListItems/>
 
            </div>
            </div>

        </div>
    </section>
  )
}
export default MyList;
