import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import './Navbar.css';
import { Badge } from "@material-ui/core";

const Navbar = () => {
    return (
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
    )
}
  

export default Navbar;