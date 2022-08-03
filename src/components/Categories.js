import React from 'react'
import styled from 'styled-components';
import { categories } from "../data";
import { Category } from './Category';


const Categories = (item) => {
  return (
    <Wrapper>
        <div className="container">
            {categories.map(item=>(
                <Category item={item}/>                     
            ))}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container{
    display:flex;
    padding:20px;
    justify-content: space-between;
}

`

export default Categories;