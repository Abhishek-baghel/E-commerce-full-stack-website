import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import { CategoryCollapse } from "../../CategoryCollapse";


export const CategoryPanel = (props) => {

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
      
      <CategoryCollapse/>
    </Box>
  );

  return (
    <Drawer anchor="left" open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {list}
    </Drawer>
  );
};

export default CategoryPanel;
