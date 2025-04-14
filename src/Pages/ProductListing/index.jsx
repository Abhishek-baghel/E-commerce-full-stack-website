import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Sidebar from '../../components/Sidebar';
import ProductItem from '../../components/ProductItem';
import Button  from '@mui/material/Button';
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
// }

const ProductListing = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <section className="py-5">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className="link transition">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className="link transition"
                    >
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>

            <div className="bg-white p-2 mt-4">
                <div className="container flex gap-3">
                    <div className="sidebarWrapper w-[20%] h-full bg white ">
                        <Sidebar /> {/* Changed <sidebar /> to <Sidebar /> */}
                    </div>

                    <div className='rightContent w-[80%] py-3'>
                        <div className='bg-[#f1f1f1] p-2 w-full !mb-4 rounded-md
                        flex items-center justify-between'>
                        <div className='col1 flex items-center'>
                        <Button className='!w-[40px] !h-[40px] !min-w-[40px]
                            !rounded-full !text-[#000]'><LuMenu className='text-[rgba(0,0,0,0.7)]'/></Button>
                            
                            <Button className='!w-[40px] !h-[40px] !min-w-[40px]
                            !rounded-full !text-[#000]'><IoGridSharp className='text-[rgba(0,0,0,0.7)]'/>
                            </Button>
                            <span className='text-[14px] font-[500] !pl-3 text-[rgba(0,0,0,0.7)]'>There are 27 products.</span>
                           
                        </div>

                        <div className="col2 ml-auto flex items-center justify-end gap-3 !pr-4">
          <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
            Sort By
          </span>

          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className=' !text-[12px] !text-[#000] !capitalize '
      >
        Sales, highest to lowest
      </Button>

          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}
        className='!bg-white !text-[12px] !text-[#000] !capitalize  !border-2 !border-[#000]'>
          Sales, highest to lowest</MenuItem>
        <MenuItem onClick={handleClose}>Relevance</MenuItem>
        <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
        <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
        <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
        <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
        <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
      </Menu>

          
        </div>
      

                        </div>
                        <div className='grid grid-cols-4 md:grid-cols-4 gap-4'></div>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductListing;