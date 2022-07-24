import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons";

const Product = () => {
  return (
    <Wrapper>
            <Navbar/>
            <Announcement/>
            <div className="wrap">
                <div className="imagecontainer">
                    <img className='image' src=""/>
                </div>
                <div className='informations'>
                    <h1 className='title'> Conversion Kit </h1>
                    <p className='description'>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare. </p>
                    <span className='price'> 20$ </span>
                    <div className='optionsContainer'>
                    <div className='options'>
                            <span className='optionTitle'></span>
                            <div color='black'>  </div>
                            <div color='darkblue'>  </div>
                            <div color='gray'>  </div>
                    </div>
                    <div className='options'>
                            <span className='optionTitle'> </span>
                            <select className='size'> 
                                <option className='sizeOption'> Small </option>
                                <option className='sizeOption'> Medium </option>
                                <option className='sizeOption'> Large </option>
                            </select>
                    </div>
                    </div>
                    <div className="addProduct">
                        <div className="numberContainer"> 
                            <Remove/> 
                            <span className='number'> 1 </span>
                            <Add/>
                        </div>
                        <button className='button'> ADD TO CART </button>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`

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