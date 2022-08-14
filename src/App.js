
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from './pages/Register';
import './index.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/products" element={<ProductList/>} /> 
        <Route path="/products/:category" element={<ProductList/>} /> 
        <Route path="/product/:id" element={<Product/>} />        
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/login" element={<Login/>}  /> 
        <Route path="/register" element={<Register/>} /> 

      </Routes>
    </Router>
    </>
  );
}

export default App;

