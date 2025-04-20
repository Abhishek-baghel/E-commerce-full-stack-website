import React, { useState } from 'react'
import { Link } from "react-router-dom"; 
import Button from "@mui/material/Box";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegPlusSquare } from 'react-icons/fa';

export const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innersubmenuIndex, setInnerSubmenuIndex] = useState(null);
  
  const openSubmenu = (newIndex) => {
    if (submenuIndex === newIndex) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(newIndex);
    }
  };
  
  const openInnerSubmenu = (newIndex) => {
    if (innersubmenuIndex === newIndex) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(newIndex);
    }
  };
  

    return (
        <div className="scroll">
        <ul className='w-full'>
         

          <li className="list-none flex items-center relative flex-col">
            <Link to='/' className='w-full'>
              <Button className="w-full !text-left !important !justify-start !important !px-3 !text-[rgba(0,0,0,0.8)]">
                Beauty
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(0)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(0)} />
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
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(0)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(0)} />
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
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(1)} />
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
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(1)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(1)} />
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
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(2)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(2)} />
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
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(2)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(2)} />
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
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(3)} />
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(3)} />
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
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(3)} />
                  ) : (
                    <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openInnerSubmenu(3)} />
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
    )   
}