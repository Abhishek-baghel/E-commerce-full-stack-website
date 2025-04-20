import React, { useState } from 'react';
import MyListItems from './myListItems';
import Button from '@mui/material/Button';
import { RiShoppingBag3Line } from "react-icons/ri";
import AccountSidebar from '../../components/AccountSidebar';

const MyList = () => {

  return (

    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">

        <AccountSidebar/>
          
        </div>

        <div className="col2 w-[70%]">
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
