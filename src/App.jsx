import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Routes also
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductListing from "./Pages/ProductListing";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes> {/* ✅ Wrap Route components inside Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ Removed exact={true}, not needed */}
          <Route path="/login" exact={true} element={<Login/>} /> {/* ✅ Added a 404 route */}
          <Route path="/register" exact={true} element={<Register/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
