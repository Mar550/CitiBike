
import React, {useState} from 'react'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import image from '../assets/ebike.png'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { removeProduct } from '../features/cartRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  { RiDeleteBin5Line } from 'react-icons/ri';


const Cart = () => {
    const cart = useSelector(state=> state.cart);
    const dispatch = useDispatch();
    
    const [product, setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeQuantity = () => {
        if (quantity > 2) {
            setQuantity(quantity - 1)
        } else {
            setQuantity(1)
        }
    }

    const removeFromCart = (product) => {
        dispatch(removeProduct(product));
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
                    <Link to="/products"> <button className='topButton'> CONTINUE SHOPPING </button> </Link>
                </div>
                <div className="left">
                {cart.products.map(product =>(
                        <div className="product"> 
                            <div className='productDetails'> 
                                <img src={image} className="image"/> 
                                <div className='details'>
                                    <span className='name'> {product.title} </span>
                                    <span className='id'> <b> ID </b> {product.id}</span>  
                                    <div id='color' color={product.color}></div> 
                                    <span className='size'> <b> Size: </b> {product.size} </span> 
                                </div>   
                            </div>
                            <div className='priceContainer'>
                                <RiDeleteBin5Line className="deleteicon" onClick={removeFromCart}/>
                                <div className='amount'>
                                    <Add className= "icon-quantity" onClick={addQuantity} />
                                        <div className='number'> {product.quantity}  </div>
                                    <Remove className= "icon-quantity" onClick={removeQuantity} />
                                </div>
                                <div className='price'> {product.price} € </div> 
                            </div>
                        </div>))}
                </div>
                </div>
                <div className='bottom'>
                    <div className='informations'>
                        
                        <div className='summary'>
                                <h1 className='summaryTitle'> ORDER SUMMARY </h1>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Total </span>
                                <span className='summaryPrice'> {cart.total} € </span>
                                </div>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> Standard Shipping </span>
                                <span className='summaryPrice'> 9.95 € </span>
                                </div>
                                <div className='summaryItem'>  
                                <span className='summaryText' type='total'> - Discount 10% </span>
                                <span className='summaryPrice'> {Math.round((100*(cart.total*0.1))/100)} € </span>
                                </div>
                                <div className='summaryItem'>  
                                <span id="total" className='summaryText' type='total'> Total </span>
                                <span id="total" className='summaryPrice'> {(cart.total) - (cart.total*0.1) + 9.95} € </span>
                                </div>                                
                                <button className='checkout'> CHECKOUT NOW </button> 
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

.deleteicon{
    font-size: 2rem;
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
}
.icon-quantity :hover{
    font-weight: bold;
}

.wrap{
    padding: 20px;
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
    width: 200px;
}

.details{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


#color{
    width: 20px;
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
    font-size: 30px;
    font-weight: 300;
}

hr{
    background-color: #eee;
    border: none;
    height: 1px;
}

.summary{
    position: sticky;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 1.6rem;
    height: 56vh;
    top:0;
    
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

#total{
    font-weight: bold;
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