import React,{useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import { Navigation, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import Login from '../pages/Login';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../features/userRedux';
import { useSelector } from "react-redux";
import { publicRequest } from '../request';
import { logout } from '../features/userRedux';
import { UserContext } from '../App';

const Navbar = () => {

    const { authUser } = useContext(UserContext);  
    console.log(authUser)
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quantity = useSelector(state=>state.cart.quantity)
    
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    
    const getProducts = async () => {
        const res = await publicRequest.get("/products/");
        setProducts(res.data);
        console.log(res)
    };

    useEffect(() => {
        getProducts();
    }, []);

    
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        window.location.replace('/')
    };

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
                { authUser ? 
                <div className="auth">
                    <div className="item"  onClick={handleLogout}> LOGOUT </div>
                </div>
                :
                <div className="auth">
                    <div className="item" onClick={() => setButtonPopup(true)}> SIGN IN </div>
                    <Link to="/register" style={{ textDecoration: 'none' }}> <div className="item"> REGISTER </div> </Link>
                </div>
                }            
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
        margin-top: auto;
        margin-bottom:auto;
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
        font-size: 1.3rem;
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
        padding: 4px;
        height: 22px;
        width: 12rem;
        border: none;
        font-size: 14px;
    }
    
    .logo{
        font-weight: bold;
    }
    
    .item{
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        font-weight:600;
        cursor: pointer;
        border: 2px solid white;
        padding: 0.5rem 1rem;
        border-radius: 15px;
        text-decoration: none;
        color: white;
        &:hover{
            background-color: white;
            color:black;
            font-weight:700;
        }
    }

    .itemb{
        margin-right: 1rem;
        cursor:pointer;

    }
    
    .auth{
        margin-right: 4rem;
        display: flex;
        flex-direction: row;
    }

    .icon-search{
        font-size: 2rem;
        margin-right: 5px;
    }

    .icon-cart{
        color:white;
        font-size: 1.8rem;
        &:hover{
            font-size:2rem;
        }
    }

    .homelink{
        color:white;
        
    }
    
`
export default Navbar;