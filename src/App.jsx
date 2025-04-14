import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Routes also
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
        <Routes> {/* ✅ Wrap Route components inside Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ Removed exact={true}, not needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
