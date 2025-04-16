import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductListing from "./Pages/ProductListing";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import { createContext } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProductZoom from "./components/ProductZoom";
import { IoMdClose } from "react-icons/io";

const MyContext = createContext();

function App() {

  const [openProductsDetailsModal , setOpenProductsDetailsModal] = useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpenProductsDetailsModal = () => {
    setOpenProductsDetailsModal(true);
  };

  const handleCloseProductsDetailsModal = () => {
    setOpenProductsDetailsModal(false);
  };

  const values = {

  }
  return (
    <>
      <BrowserRouter>
       <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path={"/ProductListing"} element={<ProductListing />} /> 
          <Route path={"/product/:id"} exact={true} element={<ProductDetails/>}/>
          <Route path={"/login"} exact={true} element={<Login/>}/>
          <Route path={"register"} exact={true} element={<Register/>}/>
        </Routes>
        <Footer/>
        </MyContext.Provider>
      </BrowserRouter>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductsDetailsModal}
        onClose={handleCloseProductsDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetilsModal"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <div className='flex place-items-center w-full productDetilsModalContainer relative'>
            <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
            !absolute top-[0px] right-[0px]" onClick={handleCloseProductsDetailsModal}><IoMdClose/></Button>
            <div className="col1 w-[40%]">
             <ProductZoom/>
            </div>
          </div>
          
        </DialogContent>
       
      </Dialog>
    </>
  );
}

export default App;

