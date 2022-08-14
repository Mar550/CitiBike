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
        <hr className="separator" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container{
  margin-top: 1rem;
    display:flex;
    padding:20px;
    justify-content: space-between;
}

.separator{
  margin-top: 1rem;
  color: grey;
  display: block;
  margin-left: 13%;
  width: 70%;
  height: 2px;
  background-color: white;
}
`

export default Categories;