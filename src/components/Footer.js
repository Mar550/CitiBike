import React from 'react'
import styled from 'styled-components';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";

function Footer() {
  return (
    <Wrapper>
        <div className="container">
           <div className="left">
                <h2 className="logo"> CITIBIKE </h2>
                <div className="description"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <div className="socialContainer">
                    <div className="socialIcon">
                        <Facebook/>
                    </div>
                    <div className="socialIcon">
                        <Instagram/>
                    </div>
                    <div className="socialIcon">
                        <Twitter/>
                    </div>
                    <div className="socialIcon">
                        <Pinterest/>
                    </div>
                </div>
            </div> 
            <div className="center">
                <h3 className="titleb"> Sections </h3>
                <ul className="list">
                    <li className="listItem"> Home </li>
                    <li className="listItem"> Cart </li>
                    <li className="listItem"> Road Cycling </li>
                    <li className="listItem"> Trail Cycling </li>
                    <li className="listItem"> Accessories </li>   
                    <li className="listItem"> My Account </li>
                    <li className="listItem"> Order Tracking </li>
                    <li className="listItem"> Favorite </li>
                    <li className="listItem"> Terms & Conditions </li>                 
                </ul>
            </div>  
            <div className="right">
                <h3 className="titleb"> Contact </h3>
                <div className="contact"> +4456585545 </div>
                <div className="contact"> info@citibike.com </div>
                <div className="contact"> 41 Shelton Street Covent Garden, London </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.logo{
    color:white;
    font-weight: bold;
}

.description{
    color: white;
    width: 80%;
}
.container{
    display: flex;
    background-color:black;
}

.left{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.description{
    margin: 20px 0px;
    color:white;
}

.socialContainer{
    display:flex;
}

.socialIcon{
    width:40px;
    height:40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
}

.center{
    flex: 1;
    padding: 20px;
}

.titleb{
    margin-bottom: 30px;
    color:white;
}

.list{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;        
}

.listItem{
    width: 50%;
    margin-bottom: 10px;
    color:white;
}

.right{
    flex: 1;
    padding: 20px;
    color:white;
}

.contact{
    margin-bottom: 20px;
    display: flex;
    align-items: center;       
}

.payment{
    width:50%;
}
`

export default Footer;