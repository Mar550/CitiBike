import React, {useState, useEffect} from 'react'
import { publicRequest, userRequest } from '../request';
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../features/cartRedux';
import { useDispatch } from 'react-redux';


const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();

    // Add condition to addtocart: if states not null then add to cart, else alert message.
    const getProduct = async () => {
        const result = await publicRequest.get("/products/find/" + id);
        setProduct(result.data);
        console.log(product)
    };

    useEffect(() => {
        getProduct();
    }, []);
    
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

    const addToCart = () =>{
        dispatch(
            addProduct({...product, quantity, price:product.price, color, size})
        )
    }
    
    return (
    <Wrapper>
        <Navbar/>
            <Announcement/>
            <div className="wrap">  
                <div className="imagecontainer">
                    <img className='image-single' src={product.img}/>
                </div>
                <div className='informations'>
                    <h1 className='title'> {product.title} </h1>
                    <p className='description'> {product.desc} </p>
                    <span className='price'> {product.price} € </span>
                    <div className='optionsContainer'>
                    <div className='options'>
                            <span className='optionTitle'> Color </span>
                            {product.color?.map((col)=>(
                                <div className="divcolor"  style={{backgroundColor: col}} 
                                color={col} key={col} onClick={()=>setColor(col)}>  </div>
                            ))}
                            
                    </div>
                    <div className='options'>
                            <span className='optionTitle'> Size </span>
                            <select className='size' onChange={(e) => setSize(e.target.value)}>
                                <option className='sizeOption' default> Select </option> 
                            {product.size?.map((siz) => (
                                <option className='sizeOption' name='size' key={siz}>{siz}</option>
                            ))}

                            </select>
                    </div>
                    </div>
                    <div className="addProduct">
                        <div className="numberContainer"> 
                            <Remove className="badge" overlap="rectangular" onClick={removeQuantity} /> 
                            <span className='number'> {quantity} </span>
                            <Add className="badge" overlap="rectangular" onClick={addQuantity} />
                        </div>
                        <button className='buttonb' onClick={addToCart}> ADD TO CART </button>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
    </Wrapper>
    )
}

const Wrapper = styled.div`

.divcolor{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 12px;
    cursor:pointer;
    border: 1px solid black;
    &:active{
        width:23px;
        height:23px;
    }
    &:focus{
        width:23px;
        height:23px;
    }
}

.wrap{
    padding: 50px;
    display:flex;
    gap: 2rem;
}

.imagecontainer{
    flex: 1;
}

.image-single{
    width: 80%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content:center;
}

.informations{
    flex: 1;
    padding: 0px 50px;
}

.title{
    font-weight: 600;
}

.description{
    margin: 20px 0px;

}

.price{
    font-weight: 100;
    font-size: 40px;
    color: red;  
    margin-top: 20px;  
}

.optionsContainer{
    width: 50%;
    margin: 30px 0px;
    gap: 1rem;
    display: flex;
    justify-content: space-between;       
}

.options{
    display: flex;
    align-items: center;
}

.optionTitle{
    font-size: 20px;
    font-weight: 200;
}

.badge{
    cursor: pointer;
}

.color{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
    border: 1px solid black;
}

.size{
    margin-left: 10px;
    padding: 5px;
}

.addProduct{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.numberContainer{
    display: flex;
    align-items: center;
    font-weight: 700;
}

.number{
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
}

.buttonb{
    padding: 15px;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 700;
    
}

.buttonb:hover{
    background-color: black;
    color:white;
    font-weight: 900;
}
`

export default Product