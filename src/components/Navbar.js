import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity);
    
    return (
        <Wrapper>
        <div className="container" >
            <div className="wrapper">
            <div className="left"> 
                <span className="language"> EN </span>
                <div className="searchContainer">
                    <Search className="icon-search"  />
                    <input type="text" className="input-search" placeholder="Search product ..." /> 
                </div>
            </div>       
            <div className="center"> 
                <h1 className="logo"> Citibike </h1>
             </div>
            <div className="right"> 
                <div className="auth">
                    <div className="item"> SIGN IN </div>
                    <div className="item"> REGISTER </div>
                </div>
                <Link to="/cart">
                <div className="itemb">
                    <Badge  overlap="rectangular" badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined className="icon-cart"/>
                    </Badge>
                </div>
                </Link>
             </div>
            </div>
        </div>
        </Wrapper>
    )
}
  
const Wrapper = styled.div`
    .container{
        height:60px;
        background-color: black;
        color: white;
    }
    
    .wrapper{
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
    }
    
    .left{
        flex: 1;
        display: flex;
        align-items: center;
    }
    
    .center{
        flex: 1;
        text-align: center;
    }
    
    .right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .language{
        color: white;
        font-size: 1rem;
        font-weight:bold;
        cursor:pointer;
        flex: 1;
    }
    
    .searchContainer{
        color: white;
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
    }
    
    .icon-cart{

    }

    .input-search{
       border-radius: 5px;
        height: 20px;
        width: 12rem;
    }
    
    .logo{
        font-weight: bold;
    }
    
    .item{
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        font-weight:bold;
        cursor: pointer;
        border: 2px solid white;
        padding: 0.5rem;
        border-radius: 15px;
    }
    
    .auth{
        margin-right: 2rem;
        display: flex;
        flex-direction: row;
    }

    .icon-search{
        font-size: 1.8rem;
    }

    .icon-cart{
        color:white;
    }
    
`
export default Navbar;