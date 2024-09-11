import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import Contact from "./components/contact/contact";
import Login from "./components/Login/login";
import Register from "./components/Login/register";
import Details from "./components/details/details";
import Cart from "./components/Cart/cart";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<>
            <Home/>
            <Products/>
          </>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:id" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/sign-in" element={<Login/>}/>
          <Route path="/sign-up" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
