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

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
                console.log(res)
            } catch {}
        };
        getProduct();
    }, [id]);
    
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
                    <img className='image' src={product.img}/>
                </div>
                <div className='informations'>
                    <h1 className='title'> {product.title} </h1>
                    <p className='description'> {product.desc} </p>
                    <span className='price'> {product.price} € </span>
                    <div className='optionsContainer'>
                    <div className='options'>
                            <span className='optionTitle'> Colors </span>
                            {product.color?.map((col)=>(
                                <div className="divcolor"  style={{backgroundColor: col}} 
                                color={col} key={col} onClick={()=>setColor(col)}>  </div>
                            ))}
                            
                    </div>
                    <div className='options'>
                            <span className='optionTitle'> Size </span>
                            <select className='size' onChange={(e) => setSize(e.target.value)}> 
                            {product.size?.map((si) => (
                                <option className='sizeOption' key={si}>{si}</option>
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
                        <button className='button' onClick={addToCart}> ADD TO CART </button>
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
    margin-left: 7px;
    cursor:pointer;
}

.wrap{
    padding: 50px;
    display:flex;
}

.imagecontainer{
    flex: 1;
}

.image{
    width: 100%;
    height: 90vh;
    object-fit: cover;
}

.informations{
    flex: 1;
    padding: 0px 50px;
}

.title{
    font-weight: 200;
}

.description{
    margin: 20px 0px;
}

.price{
    font-weight: 100;
    font-size: 40px;    
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

.button{
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    
}

.button:hover{
    background-color: #f8f4f4;
}
`

export default Product