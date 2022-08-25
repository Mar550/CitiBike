import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { SearchOutlined } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Product = ({item}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
    <Wrapper>
        <div className="container">
            <div>
            <img className="image" src={item.img}/>
            <div className="informations"> 
                <div className="icon"> 
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </div>
                <div className="icon">
                    <FavoriteBorderOutlined/>
                </div>
            </div>
            <div className="divrow">
            <h2 > {item.title} </h2>
            <h2 className="price"> <i>{item.price} $ </i> </h2>
            </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    flex: 1;
    margin: 10px;
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

}

i{
    color:red;
}

.divrow{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin-top: 0.5rem;
}

.icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    color:black;
}
.image{
    height: 75%;
    z-index: 2;
}

.informations{
    opacity:0%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
}

.informations:hover{
    opacity:100%;
}


`
export default Product;