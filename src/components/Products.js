import React from 'react';
import styled from "styled-components";
import { popularProducts } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <Wrapper>
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
    display: flex;
    flex-wrap: wrap;
    padding: 20px;    
    justify-content: space-between;
}


`
export default Products;