import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Category = ({item}) => {
  return (
    <Wrapper>
        <div className="container">
            <Link to={`/products/${item.category}`}> 
            <img className="image" src={item.img} />
            <div className="informations">
            <h1 className="title"> {item.title} </h1>
            <button className="button"> SHOP NOW </button>
            </div>
            </Link>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`

.container{
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    height:80%;
}

.image{
    width: 100%;
    height: 100%
    object-fit: cover; 
}

.image:hover {
    opacity: 0.7;
}

.informations{
    position: absolute;
    width: 100%;
    height: 20%;
    top:50%;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


}
.title{
    color:white;
    font-weight:bold;
    margin-bottom: 20px;
}

.button{
    border:none;
    padding: 10px;
    background-color: white;
    color: black;
    cursor:pointer;
    font-weight:bold;
}
`

export default Category;