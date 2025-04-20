import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge  from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';   
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";





const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': { 
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },  
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext);  
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[13px] font-[500] !pl-2">
                Get up to 50% off new season's styles, limited time only!
              </p>
            </div>
            <div className="col2 flex items-center justify-end !pr-2">
              <ul className="flex items-center gap-3">
                <li>
                  <Link to="/help-center" className="text-[13px] font-[500]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/order-tracking" className="text-[13px] font-[500]">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header !py-4 border-b-[1px] border-gray-250">
    <div className="container px-6 flex items-center justify-between">
        <div className="col1 flex items-center  !w-[40%] !pl-4">
            <Link to={"/"}>
                <img src="/tikishnutra_resized.png" className="h-12 w-auto" alt="Logo" />
            </Link>
        </div>

        <div className="col2 flex-grow w-[20%]"></div>
        <Search />
        
        <div className="col3 w-[40%] !ml-5 flex items-center !pl-7 !pr-2">
         
            <ul className="flex items-center justify-end w-full gap-3">
            {
            context.isLogin === false  ?
            <li className="list-none">
                    <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> | &nbsp;
                    <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>
                </li>

                : <>
                <Button className='!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer' onClick={handleClick}>
  <div className='!w-[40px] !h-[40px] !min-w-[40px]  !rounded-full !bg-[#f1f1f1] flex items-center justify-center'>
    <FaRegUser className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
  </div>

  <div className='info flex flex-col'>
    <h4 className="leading-3 text-[14px] font-[500] text-[rgba(0,0,0,0.6)] !mb-0 capitalize text-left justify-start">
      Abhishek Baghel
    </h4>
    <span className='text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start'>
      abhishekbagel.12b@gmail.com
    </span>
  </div>
</Button>

                     
                     <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="my-account" className='w-full block'>
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
          <FaRegUser className='text-[18px]'/><span className='text-[14px]'>My Account</span>
        </MenuItem></Link>
        <Link to="my-orders" className='w-full block'>
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
          <IoBagHandleOutline className='text-[18px]'/><span className='text-[14px]'>Orders</span> 
        </MenuItem></Link>
        <Link to="my-list" className='w-full block'>
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2' >
          <IoMdHeartEmpty className='text-[18px]'/><span className='text-[14px]'>My List</span> 
        </MenuItem></Link>
        
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
          <IoLogOutOutline className='text-[18px]'/><span className='text-[14px]'>Logout</span> 
        </MenuItem>
      </Menu>
          
                </>
}
              <li>
              <Tooltip title="Compare">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                   <IoGitCompareOutline />
                  </StyledBadge>
                </IconButton>
                </Tooltip>

              </li>
              <li>
              <Tooltip title="Wishlist">
              <IconButton aria-label="cart" >
                <StyledBadge badgeContent={4} color="secondary">
                   <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
              <Tooltip title="Cart"> 
              <IconButton aria-label="cart" onClick={()=> context.setOpenCartPanel(true)}>
                <StyledBadge badgeContent={4} color="secondary">
                   <MdOutlineShoppingCart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
 
       <Navigation/>    
    
    </header>
  );
};

export default Header;
  
