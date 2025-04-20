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
import CartPage from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetailsComponent from "./components/ProductDetails";
import MyList from "./Pages/MyList";
import Verify from "./Pages/Verify";
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/ForgotPassword';
import MyAccount from "./Pages/MyAccount";


const MyContext = createContext();

function App() {
  
  
  const [openProductsDetailsModal , setOpenProductsDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, SetIsLogin] = React.useState(true);


  const handleCloseProductsDetailsModal = () => {
    setOpenProductsDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const openAlertBox = ({ status, msg }) => {
    if (status === "success") {
      toast.success(msg);
    }

    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    setOpenProductsDetailsModal,
    openAlertBox,
    isLogin,
    SetIsLogin,
  }
  return (
    <>
      <BrowserRouter>
       <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path={"/ProductListing"} element={<ProductListing />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
        <Footer/>
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster/>
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
            !absolute  !pb-5  top-[15px] right-[15px] !bg-[#f1f1f1]" onClick={handleCloseProductsDetailsModal}><IoMdClose className="text-[20px]"/></Button>
            <div className="col1 w-[40%] !px-3">
             <ProductZoom/>
            </div>

            <div className="col2 w-[60%] !py-8 !px-8 !pr-16 productContent ">
               <ProductDetailsComponent/>
            </div>

          </div>
          
        </DialogContent>
       
      </Dialog>
  
      

    </>
  );
}

export default App;

export {MyContext};