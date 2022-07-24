import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProductList = () => {
  return (
    <Wrapper>
        <div className="container">
            <Navbar/>
            <Announcement/>
            <div className="filtercontainer">
                <div className="filter">
                    <span className="filtertext"> Filter Products: </span>
                    <select className='select'> 
                        <option disabled selected> Color</option>
                        <option> Black </option>
                        <option> Grey </option>
                        <option> Blue </option>
                        <option> Lime </option>
                        <option> White </option>
                    </select>
                    <select className='select'> 
                        <option disabled selected> Size </option>
                        <option> Small </option>
                        <option> Medium </option>
                        <option> Large </option>
                    </select>
                </div>
                <div className="filter">
                    <span className="filtertext"> Sort Products: </span>
                    <select> 
                        <option selected> Newest </option>
                        <option> Price (asc)</option>
                        <option> Price (desc) </option>
                    </select>
                </div>
            </div>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.title{
    margin: 20px;
}
.filtercontainer{
    display: flex;
    justify-content: space-between;
}
.filter{
    margin: 20px;
}
.filtertext{
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
}
.select{
    padding: 10px;
    margin-right: 20px;
}
`

export default ProductList