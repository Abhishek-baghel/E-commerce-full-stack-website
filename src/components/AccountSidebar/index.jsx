import React from 'react';
import { Button } from '@mui/material';
import { FaRegUser } from 'react-icons/fa';
import { MdCloudUpload } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
            <div className="w-full !p-3 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4  relative group">
                <img src='https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds'
                 className='w-full h-full object-cover'/>
                               <div className="overlay !w-[100%] !h-[100%] absolute !top-0 !left-0 !z-50
                                !bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all
                                group-hover:opacity-100">
                                    <MdCloudUpload className='text-[#fff] text-[25px]'/>
                                    <input type='file' className='absolute !top-0 !left-0 !w-full !h-full !opacity-0'></input>
              </div>

              </div>
              <h3>Mukesh Ambani</h3>
              <h6 className='text-[13px] font-[500]'>ambanimukesh@gmail.com</h6>
            </div>

            <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
  <li className="w-full pb-5">
  <NavLink
  to="/my-account"
  className={({ isActive }) => isActive ? "isActive" : ""}
>

  <Button className="w-full !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
    <FaRegUser className="text-[15px]" /> My Profile
  </Button>
</NavLink>

  </li>

  <li className="w-full pb-5">
  <NavLink
  to="/my-list"
  className={({ isActive }) => isActive ? "isActive" : ""}
>

    <Button className="w-full !text-left   !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
      <IoMdHeartEmpty className="text-[17px]" /> My List
    </Button>
    </NavLink>
  </li>
  


  <li className="w-full pb-5">
  <NavLink
  to="/my-orders"
  className={({ isActive }) => isActive ? "isActive" : ""}
>

    <Button className="w-full !text-left  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
      <IoBagHandleOutline className="text-[17px]" /> My Orders
    </Button>
    </NavLink>
  </li>


  <li className="w-full !pb-5">
  <NavLink
  to="/my-account"
  className={({ isActive }) => isActive ? "isActive" : ""}
>

    <Button className="w-full !text-left  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
      <IoLogOutOutline className="text-[18px]" /> Logout
    </Button>
    </NavLink>
  </li>


 
</ul>



          </div>
  )
}

export default AccountSidebar;
