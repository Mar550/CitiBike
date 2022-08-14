import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Category from '../components/Category';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ProductList from './ProductList';
import Product from './Product';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';

const Home = () => {
  return (
    <div> 
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div> 
    )
}

export default Home