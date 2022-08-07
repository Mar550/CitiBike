import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters, 
            [e.target.name]: value,
        }
        )
    }
    console.log(filters);
    console.log(sort);

  return (
    <Wrapper>
        <div className="container">
            <Navbar/>
            <Announcement/>
            <div className="filtercontainer">
                <div className="filter">
                    <span className="filtertext"> Filter Products: </span>
                    <select className='select' name="color" onChange={handleFilters}> 
                        <option selected disabled > Color</option>
                        <option> Black </option>
                        <option> Grey </option>
                        <option> Blue </option>
                        <option> Lime </option>
                        <option> White </option>
                    </select>
                    <select className='select' name="size" onChange={handleFilters}> 
                        <option selected disabled > Size </option>
                        <option > S </option>
                        <option> M </option>
                        <option> L </option>
                    </select>
                </div>
                <div className="filter">
                    <span className="filtertext"> Sort Products: </span>
                    <select onChange={(e) => setSort(e.target.value)}> 
                        <option value ="newest"> Newest </option>
                        <option value ="asc"> Price (asc)</option>
                        <option value ="desc"> Price (desc) </option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort}/>
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