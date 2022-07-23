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
                <div className="logo"> </div>
                <div className="description"> </div>
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
                <h3 className="title"> </h3>
                <ul className="list">
                    <li className="listItem"> Home </li>
                    <li className="listItem"> Cart </li>
                    <li className="listItem"> Man Fashion </li>
                    <li className="listItem"> Woman Fashion </li>
                    <li className="listItem"> Accessories </li>   
                    <li className="listItem"> My Account </li>
                    <li className="listItem"> Order Tracking </li>
                    <li className="listItem"> Favorite </li>
                    <li className="listItem"> Terms & Conditions </li>                 
                </ul>
            </div>  
            <div className="right">
                <h3 className="title"> Contact </h3>
                <div className="contact"> </div>
                <div className="contact"> </div>
                <div className="contact"> </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    display: flex;
}

.left{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.description{
    margin: 20px 0px;
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

.title{
    margin-bottom: 30px;
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
    margin-bottom: 10px
}

.right{
    flex: 1;
    padding: 20px;
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