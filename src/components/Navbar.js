import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Navbar = () => {
    return (
        <Wrapper>
        <div className="container" >
            <div className="wrapper">
            <div className="left"> 
                <span className="language"> EN </span>
                <div className="searchContainer">
                    <input className="input-search" placeholder="Search" /> 
                    <Search className="icon-search" style={{ color:"gray", fontSize:16 }} />
                </div>
            </div>
            
            <div className="center"> 
                <h1 className="logo"> Citibike </h1>
             </div>
            <div className="right"> 
                <div className="item"> REGISTER </div>
                <div className="item"> SIGN IN </div>
                <div className="item">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </div>
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
        font-size: 14px;
        cursor:pointer;
        flex: 1;
    }
    
    .searchContainer{
        color: white;
        flex: 1;
        border: 1px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
    }
    
    .input-search{
        border: none;
    }
    
    .logo{
        font-weight: bold;
    }
    
    .item{
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
    }
    
    
`
export default Navbar;