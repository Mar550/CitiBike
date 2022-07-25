import { Announcement } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image from '../assets/ebike.png'
import { Add, Remove } from '@material-ui/icons'

const Cart = () => {
  return (
    <Wrapper>
        <div className='container'>
            <Navbar/>
            <Announcement/>
            <div className="wrap">
                <h1> YOUR SHOPPING CART </h1>
                <div className='top'>
                    <div className='topTexts'> 
                       <div className='topText'> Shopping Bag(2)</div>  
                       <div className='topText'> Your Wishlist(0)</div>  
                    </div> 
                    <button className='topButton'> CONTINUE SHOPPING </button>
                </div>
                <div className='bottom'>
                    <div className='informations'>
                        <div className="product"> 
                            <div className='productDetails'> 
                                <img src={image} className="image"/> 
                                <div className='details'>
                                    <span className='name'> Ebike - Conversion Kit </span>
                                    <span className='id'> <b> ID </b> 7328572</span>  
                                    <div id='color' color='grey'></div> 
                                    <span className='size'> <b> Size: </b> Small </span> 
                                </div>   
                            </div>
                            <div className='priceContainer'>
                                <div className='amount'>
                                    <Add/>
                                    <div className='number'> </div>
                                    <Remove/>
                                </div>
                                <div className='price'> 50 $ </div> 
                            </div>
                        </div>
                        <hr/>
                        <div className="product"> 
                            <div className='productDetails'> 
                                <img src={image} className="image"/> 
                                <div className='details'>
                                    <span className='name'> Ebike - Conversion Kit </span>
                                    <span className='id'> <b> ID </b> 7328572</span>  
                                    <div id='color' color='grey'></div> 
                                    <span className='size'> <b> Size: </b> Medium </span> 
                                </div>   
                            </div>
                            <div className='priceContainer'>
                                <div className='amount'>
                                    <Add/>
                                    <div className='number'> </div>
                                    <Remove/>
                                </div>
                                <div className='price'> 50 $ </div> 
                            </div>
                        </div>
                        <div className='summary'>
                                <h1 className='summaryTitle'> ORDER SUMMARY </h1>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Total </span>
                                <span className='summaryPrice'> 120 € </span>
                                </div>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Standard Shipping </span>
                                <span className='summaryPrice'> 9.95 € </span>
                                </div>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Discount 10% </span>
                                <span className='summaryPrice'> -12.99 € </span>
                                </div>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Total </span>
                                <span className='summaryPrice'> 116.95 € </span>
                                </div>                                
                                <button className='checkout'> CHECKOUT NOW </button> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.wrap{
    padding: 2rem;
}

h1{
    font-weight: bold;
    text-align: center;
}

.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
}

.topButton{
    padding: 1rem;
    font-weight: 800;
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
    color: black;
}

.topButton:hover{
    border: 3px solid black;
    background-color: black;
    color:white;
}

.topTexts{

}

.topText{
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 1rem;
}

.bottom{
    display: flex;
    justify-content: space-between;
}

.informations{
    flex: 3;
}

.product{
    display: flex;
    justify-content: space-between;
}

.productDetails{
    flex: 2;
    display: flex;
}

.image{
    width: 200px;
}

.details{
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.name{

}

.id{

}

#color{
    width: 1.5rem;
    height: 20px;
    border-radius: 50%;
    background-color: grey;        
}

.priceContainer{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.amount{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.number{
    font-size: 1.7rem;
    margin: 5px;
}

.price{
    font-size: 2.3rem;
    font-weight: 200;
}

hr{
    background-color: #eee;
    border: none;
    height: 1px;
}

.summary{
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 1.6rem;
    height: 50vh;
}  

.summaryTitle{
    font-weight: 200;
}

.summaryItem{
    margin: 2rem 0px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

}

.summaryText{
    font-size: 1.1rem;
    font-weight: 700;
}

.checkout{
    width: 100%;
    padding: 0.8rem;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor:pointer;
}

.checkout:hover{
    background-color:black;
    color:white;
}

`

export default Cart