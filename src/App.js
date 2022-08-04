
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Categories from "./components/Categories";
import Category from "./components/Category";
import Products from "./components/Products";
import Product from "./components/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/products" element={<ProductList/>} /> 
        <Route path="/products/:category" element={<ProductList/>} /> 
        <Route path="/products/:id" element={<ProductList/>} /> 
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/login" element={<Login/>}  /> 
        <Route path="/register" element={<Register/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;

