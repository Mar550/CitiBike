
import React, {useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import './index.css';


export const UserContext = React.createContext("")

function App() {

  const currentUser = useSelector(state => state.user.user)
  const [authUser, setAuthUser] = useState(currentUser == null ? null : currentUser);

  return (
    <UserContext.Provider value={{ authUser, setAuthUser }}>
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/products" element={<ProductList/>} /> 
          <Route path="/products/:category" element={<ProductList/>} /> 
          <Route path="/product/:id" element={<Product/>} />       
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/login" element={<Login/>}  /> 
          <Route path="/register" element={<Register/>} /> 
        </Routes>
      </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;

