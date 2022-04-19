import React from "react";
//react router dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//pages
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  ProductDetails,
  Products,
} from "./pages";

//components
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={Error}></Route>
      </Routes>
    </Router>
  );
}
