import React from 'react';
import styled from "styled-components";
import { popularProducts } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <Wrapper>
        <h1 className="title"> Our popular products </h1>
        <div className="container">
        {popularProducts.map((item) => (
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