import React, {useState, useEffect} from 'react'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import image from '../assets/ebike.png'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { removeProduct, clearCart } from '../features/cartRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  { MdRemoveShoppingCart } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';

const Cart = () => {

    const [shipping, setShipping] = useState(0)
    const [quantity, setQuantity] = useState(0)
        

    const cart = useSelector(state=> state.cart);
    const dispatch = useDispatch();
    console.log(cart)

    const removeFromCart = () => {
        dispatch(removeProduct(cart));
    }

    const shippingFees = (total) => {
        if (total > 0) {
            return 9.95
        } else {
            return 0
        }
    }

    const removeUnit = (item) => {
        return item -=  - 1
    }

    const addUnit = (item) => {
        return item +=  + 1
    }
     
return (
    <Wrapper>
        <div className='container'>
            <Announcement/>
            <Navbar/>
            <div className="wrap">
                <h1> YOUR SHOPPING CART </h1>
                <div className="mainrow">
                <div className="maincol">
                <div className='top'>
                    <div className='topTexts'> 
                       <div className='topText'> Shopping Cart ({cart.products.length})</div>  
                       <hr/>
                       <div className='topText'> Your Favorites (0)</div> 
                    </div> 
                    <div id="buttons">
                        <button className="topButton" onClick = {() => {dispatch(clearCart())}}> CLEAR CART </button>
                        <Link to="/products"> <button className='topButton'> CONTINUE SHOPPING </button> </Link>
                    </div>
                </div>
                { cart.products.length < 1 ?
                 <h1 className="empty"> Your cart is empty </h1>   
                :
                <div className="leftb">
                {cart.products.map(product =>(
                        <div className="product"> 
                            <div className='productDetails'> 
                                <img src={product.img} className="image"/> 
                                <div className='details'>
                                    <h3 className='name'> {product.title} </h3>
                                    <div className="colordiv">
                                        <span> <b> Color: </b>  </span>
                                        <div id='color' style={{ backgroundColor: `${product.color}`, border:`1px solid black` }}></div>
                                    </div>
                                    <span className='size'> <b> Size: </b> {product.size} </span> 
                                </div>   
                            </div>
                            <div className='priceContainer'>
                                <MdRemoveShoppingCart className="deleteicon" onClick={()=>{dispatch(removeProduct(product._id))}}/>
                                <div className='amount'>
                                    <Add className= "icon-quantity"  />
                                        <div className='number'> {product.quantity}  </div>
                                    <Remove className= "icon-quantity"  />
                                </div>
                                <div className='price'> {product.price} £ </div> 
                            </div>
                        </div>))}
                </div>
                 }
                </div>
                
                <div className='bottom'>
                    <div className='informations'>
                        
                        <div className='column'>
                                <div>
                                <h1 className='summaryTitle'> ORDER SUMMARY </h1>
                                </div>
                                <div className='summary'>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Items </span>
                                <span className='summaryPrice'> {cart.total} £ </span>
                                </div>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Standard Shipping </span>
                                <span className='summaryPrice'> {shippingFees(cart.total)} £ </span>
                                </div>
                                { cart.total > 0 ? 
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> - Discount 10% </span>
                                <span className='summaryPrice'> {Math.round((100*(cart.total*0.1))/100)} £ </span>
                                </div>
                                :
                                <div></div>
                                }
                                <div className='summaryItem'>  
                                <span id="total" className='summaryTotal' type='total'> Total </span>
                                <span id="total" className='summaryPrice'> {(cart.total) - (cart.total*0.1) + shipping} £ </span>
                                </div>  
                                </div>
                                <div>                              
                                <button className='checkout'> CHECKOUT NOW </button>
                                </div> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.empty{
    margin-top: 7%;
    padding: 2rem;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
#buttons{
    display:flex;
    flex-direction: row;
    gap: 15px;
}
.leftb{
    margin-top: 1rem;
}
.colordiv{
    display:flex;
    flex-direction: row;
    gap: 1rem;
}
.deleteicon{
    font-size: 1.5rem;
    cursor:pointer;
}
.mainrow{
    margin-top: 3rem;
    display:flex;
    flex-direction: row;
    width:100%;
}
.maincol{
    display:flex; 
    flex-direction: column;
    width: 72%;
}
.informations{
    flex: 3;

}
.icon-quantity{
    cursor:pointer;
    font-size:22px;
    border: 1px solid black;
}
.wrap{
    padding: 2rem;
}
h1{
    font-weight: 600;
    text-align: center;
}
.top{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 90%;
}
.topButton{
    padding: 10px;
    font-weight: 800;
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
    color: black;
    height: 2.5rem;
    float:right;
}
.topButton:hover{
    border: 3px solid black;
    background-color: black;
    color:white;
}
.topText{
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 10px;
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
    width: 230px;
    margin-top: 0.5rem;
}
.details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 23px;
    heigth: 80%;
}
#color{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};

}
.priceContainer{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 23px;
    justify-content: center;
    margin-right: 4.5rem;
}
.amount{
    display: flex;
    align-items: center;
    gap: 5px;   
}
.number{
    font-size: 1.5rem;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 800;
}
.price{
    font-size: 1.5rem;
    font-weight: 800;
    color: red;
}
hr{
    background-color: #eee;
    border: none;
    height: 1px;
}
.summary{
    
}

.column{
    position: sticky;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 2rem 1.5rem 2rem 1.5rem;
    height: 100%;
    top:2rem;  
}
.summaryTitle{
    font-weight: 200;
}

.summaryItem{
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

}

.checkout{
    width: 100%;
    padding: 10px;
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
