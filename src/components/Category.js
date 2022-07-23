import React from 'react'
import styled from 'styled-components';

export const Category = ({item}) => {
  return (
    <Wrapper>
        <div className="container">
            <img className="image" src={item.img} />
            <div className="informations">
            <h1 className="title"> {item.title} </h1>
            <button className="button"> SHOP NOW </button>
            </div>
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
    background-color: white;
}
.image{
    width: 100%;
    height: 100%
    object-fit: cover; 
}
.informations{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.title{
    color:white;
    margin-bottom: 20px;
}

.button{
    border:none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor:pointer;
    font-weight:bold;
}
`
