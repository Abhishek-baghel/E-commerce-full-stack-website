import Button from '@mui/material/Button';
import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"; // Updated import path

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false); 
    const navigate = useNavigate(); // Initialize useNavigate

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };

    const handleNavigation = (path) => {
        navigate(path); // Programmatically navigate to the specified path
    };

    return (
      <>
        <nav>
            <div className='container flex items-center justify-end gap-8'>
                <div className='col_1 w-[20%]'>
                    <Button className="!text-black font-bold flex items-center gap-2 w-full"
                        onClick={openCategoryPanel} disableRipple>
                        <RiMenu2Fill className="text-[18px]" />
                        <span className="font-bold">Shop By Categories</span> 
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
                    </Button>
                </div>

                <div className='col_2 w-[60%]'>
                    <ul className="flex items-center gap-8 nav">
                        {/* Home */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Home
                                </Button>
                            </Link>
                        </li>

                        {/* Beauty */}
                        <li className="list-none relative"> 
                            <div className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Beauty
                                </Button>
                            </div>
                            <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                    <li className="list-none w-full relative">
                                        <div onClick={() => handleNavigation("/")} className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Men</Button>
                                        </div>
                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                                            <ul>
                                                <li className="list-none w-full relative">
                                                    <div onClick={() => handleNavigation("/")} className="w-full">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Face Wash</Button>
                                                    </div>
                                                </li>
                                                <li className="list-none w-full">
                                                    <div onClick={() => handleNavigation("/")} className="w-full">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Deodorant</Button>
                                                    </div>
                                                </li>
                                                <li className="list-none w-full">
                                                    <div onClick={() => handleNavigation("/")} className="w-full">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Shaving Cream</Button>
                                                    </div>
                                                </li>
                                                <li className="list-none w-full">
                                                    <div onClick={() => handleNavigation("/")} className="w-full">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Beard Oil</Button>
                                                    </div>
                                                </li>
                                                <li className="list-none w-full">
                                                    <div onClick={() => handleNavigation("/")} className="w-full">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Soap</Button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-none w-full">
                                        <div onClick={() => handleNavigation("/")} className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Women</Button>
                                        </div>
                                    </li>
                                    <li className="list-none w-full">
                                        <div onClick={() => handleNavigation("/")} className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Kids</Button>
                                        </div>
                                    </li>
                                    <li className="list-none w-full">
                                        <div onClick={() => handleNavigation("/")} className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Girls</Button>
                                        </div>
                                    </li>
                                    <li className="list-none w-full">
                                        <div onClick={() => handleNavigation("/")} className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Boys</Button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Skincare */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Skincare
                                </Button>
                            </Link>
                        </li>

                        {/* Wellness */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Wellness
                                </Button>
                            </Link>
                        </li>

                        {/* Fitness */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Fitness
                                </Button>
                            </Link>
                        </li>

                        {/* Herbal */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Herbal
                                </Button>
                            </Link>
                        </li>

                        {/* Ayurvedic */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500] hover:text-gray-500">
                                <Button className="link transition !font-bold !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Ayurvedic
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col_3 w-[20%]">
                    <p className="text-[14px] font[500] flex items-center gap-3 mb-0 mt-0">
                        <GoRocket className="text-[18px]" />
                        Low Delivery Fees, Fast Shipping!
                    </p>
                </div>
            </div>
        </nav>

        {/* Category panel component */}
        <CategoryPanel isOpenCatPanel={isOpenCatPanel} 
        setIsOpenCatPanel={setIsOpenCatPanel}/>
      </>
    );
};

export default Navigation;