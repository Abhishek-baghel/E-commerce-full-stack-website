import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiMinusSquare } from "react-icons/fi";

export const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innersubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const toggleSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const toggleInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innersubmenuIndex === index ? null : index);
  };

  const list = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-4 text-[16px] !important font-[500] flex items-center justify-between border-b border-gray-300">
        Shop By Categories
        <IoCloseSharp onClick={toggleDrawer(false)} className="cursor-pointer text-[20px] p-2" />
      </h3>
      
      <div className="scroll">
        <ul className='w-full'>
         

          <li className="list-none flex items-center relative flex-col">
            <Link to='/' className='w-full'>
              <Button className="w-full !text-left !important !justify-start !important !px-3 !text-[rgba(0,0,0,0.8)]">
                Beauty
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(0)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(0)} />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to='/'>
                    <Button className="w-full !text-left !important !justify-start !px-3 !pl-7 !text-[rgba(0,0,0,0.8)]">
                      Makeup
                    </Button>
                  </Link>
                  {innersubmenuIndex === 0 ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(0)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(0)} />
                  )}

                  {innersubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                          Foundation
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                          Lipstick
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                          Eyeliner
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                          Compact Powder
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to='/' className='w-full'>
              <Button className="w-full !text-left !important !justify-start !important !px-3 !text-[rgba(0,0,0,0.8)]">
                Skincare
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(1)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(1)} />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to='/'>
                    <Button className="w-full !text-left !important !justify-start !px-3 !pl-7 !text-[rgba(0,0,0,0.8)]">
                      Skin Products
                    </Button>
                  </Link>
                  {innersubmenuIndex === 1 ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(1)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(1)} />
                  )}

                  {innersubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Face Wash
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Moisturizer
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Sunscreen
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Serums
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>


          <li className="list-none flex items-center relative flex-col">
            <Link to='/' className='w-full'>
              <Button className="w-full !text-left !important !justify-start !important !px-3 !text-[rgba(0,0,0,0.8)]">
              Haircare
              </Button>
            </Link>
            {submenuIndex === 2 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(2)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(2)} />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to='/'>
                    <Button className="w-full !text-left !important !justify-start !px-3 !pl-7 !text-[rgba(0,0,0,0.8)]">
                    Hair Products
                    </Button>
                  </Link>
                  {innersubmenuIndex === 2 ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(2)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(2)} />
                  )}

                  {innersubmenuIndex === 2 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Shampoo
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Conditioner
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Hair Oil
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Hair Mask
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>


          <li className="list-none flex items-center relative flex-col">
            <Link to='/' className='w-full'>
              <Button className="w-full !text-left !important !justify-start !important !px-3 !text-[rgba(0,0,0,0.8)]">
                Wellness
              </Button>
            </Link>
            {submenuIndex === 3 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(3)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(3)} />
            )}

            {submenuIndex === 3 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to='/'>
                    <Button className="w-full !text-left !important !justify-start !px-3 !pl-7 !text-[rgba(0,0,0,0.8)]">
                    Supplements
                    </Button>
                  </Link>
                  {innersubmenuIndex === 3 ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(3)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(3)} />
                  )}

                  {innersubmenuIndex === 3 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Multivitamins
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                          Protein Powder
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                        Energy Drinks
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to='/' className="link w-full !text-left !important !justify-start !px-3 !pl-10 transition text-[14px]">
                          Calcium
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>



           
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="left" open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {list}
    </Drawer>
  );
};

export default CategoryPanel;
