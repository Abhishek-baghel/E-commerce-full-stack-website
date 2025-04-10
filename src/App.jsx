import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductListing from "./Pages/ProductListing";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Removed exact={true} */}
          <Route path={"/ProductListing"} element={<ProductListing />} /> {/* Removed exact={true} */}
          <Route path={"/product/:id"} exact={true} element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;