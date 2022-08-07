import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { popularProducts } from '../data';
import Product from './Product';


const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);

  // Add header allow axios
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `/products?category=${cat}`
            : "/products/"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
 
  return (
    <Wrapper>
        <h1 className="title"> Our popular products </h1>
        <div className="container">
        {products.map((item) => (
            <Product item={item} key={item.id} />
        ))};
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    padding: 20px; 
    width: 21rem;
    gap: 4rem;
}

.title{
  text-align:center;
  font-weight: bold;
  font-size: 2.5rem;
}

`
export default Products;