import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from '../pages/Login';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { publicRequest } from '../request';
import { loginSuccess, logout } from '../features/userRedux';

const Navbar = () => {
        
    const [buttonPopup, setButtonPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quantity = useSelector(state=>state.cart.quantity)

    console.log(quantity);
    
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    

    const getProducts = async () => {
        const res = await axios.get("/products/");
        setProducts(res.data);
        console.log(res)
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log(products.filter(product=>product.title.toLowerCase().includes(search)))

    const Logout = async () => {
        const res = await publicRequest.post("/auth/logout/");
        localStorage.removeItem('token');
        console.log("Logout done")
        }
     
      

    return (
        <Wrapper>
        <div className="container" >
            <div className="wrapper">
            <div className="left"> 
                <span className="language"> EN </span>
                <div className="searchContainer">
                    <Search className="icon-search"  onClick={getProducts} />
                    <input 
                    type="text" 
                    className="input-search" 
                    placeholder="Search product ..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/> 
                </div>
            </div>
            <div className="center"> 
            <Link className="homelink" to="/" style={{ textDecoration: 'none' }}>      
                <h1 className="logo"> Citibike </h1> 
             </Link> 
             </div>
            <div className="right">        
                <div className="auth">
                    <div className="item" onClick={() => setButtonPopup(true)}> SIGN IN </div>
                    <Link to="/register" style={{ textDecoration: 'none' }}> <div className="item"> REGISTER </div> </Link>
               </div>
            
                <Link to="/cart">
                <div className="itemb">
                    <Badge  overlap="rectangular" badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined className="icon-cart"/>
                    </Badge>
                </div>
                </Link>
             </div>
            </div>
        </div>
        <Login trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </Wrapper>
    )
}
  
const Wrapper = styled.div`
    .container{
        height:60px;
        background-color: black;
        color: white;
    }
    
    .wrapper{
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
    }
    
    .left{
        flex: 1;
        display: flex;
        align-items: center;
    }
    
    .center{
        flex: 1;
        text-align: center;
    }
    
    .right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .language{
        color: white;
        font-size: 1rem;
        font-weight:bold;
        cursor:pointer;
        flex: 1;
    }
    
    .searchContainer{
        color: white;
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
    }
    
    .icon-cart{

    }

    .input-search{
       border-radius: 5px;
        height: 25px;
        width: 12rem;
    }
    
    .logo{
        font-weight: bold;
    }
    
    .item{
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        font-weight:bold;
        cursor: pointer;
        border: 2px solid white;
        padding: 0.5rem;
        border-radius: 15px;
        text-decoration: none;
        color: white;
    }
    
    .auth{
        margin-right: 2rem;
        display: flex;
        flex-direction: row;
    }

    .icon-search{
        font-size: 1.8rem;
    }

    .icon-cart{
        color:white;
    }

    .homelink{
        color:white;
        
    }
    
`
export default Navbar;