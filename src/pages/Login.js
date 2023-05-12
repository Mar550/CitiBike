import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaGooglePlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../features/serverCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    window.location.replace('/');
  };

    return (props.trigger) ? ( 
      <Wrapper>
        <div className="containerlogin">
          <div className="login-info-container">
            <h1 className="title"> login </h1>
            <h3 className="subtitle"> AND ACCESS YOUR PERSONAL ACCOUNT </h3>
            <form className="inputs-container">
                <div className="row">
                <p> Username</p>
                <input 
                className="input" 
                type="text" 
                name="username"
                value={username}
                placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="row">
                <p> Password </p>
                <input 
                className="input" 
                type="password" 
                name="password"
                value={password}
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="buttons">
                <button className="btn" onClick={handleSubmit} > Submit </button>
                <button className="btn" onClick={() => props.setTrigger(false)}> Close </button> 
                </div>
                {error && <p>Something went wrong...</p>}
                <p>Still not registered ? <Link to="/register" style={{ textDecoration: 'none' }}><span className="span"> Create an account </span> </Link></p>      
            </form>
          </div>
          </div>
      </Wrapper>
    ) : "";
}

const Wrapper = styled.div`

.subtitle{
  color:#767676;
  font-weight: BOLD;
  font-size: 1.1rem;
}

.row{
  display:flex;
  flex-direction: column;
  gap: 0.6rem;
}

.containerlogin{
  z-index: 1;
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0,0.8);
  }
  .icones{
  display:flex;
  gap: 10px;
  font-size: 2rem;
  margin-top: 10px;
  cursor:pointer;
  }
  .login-info-container {
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  gap: 20px;
  border-radius: 5px;
  margin-top: 1.5rem;
  margin-left:auto;
  margin-right: auto;
  }
  #image{
  width: 65%;
  
  margin-left: auto;
  margin-right: auto;
  }
  .title {
  text-transform: capitalize;
  font-size: 3.5rem;
  font-weight: 1300;
  letter-spacing: 1px;
  color: black;
  }
  .login-info-container > p {
  font-size: 1.5em;
  margin-top: 1.8em;
  }
  .inputs-container {
  margin-top: 2rem;
  height: 60%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;
  }
  .input, .btn {
  width: 90%;
  height: 2.8rem;
  font-size: 1em;
  }
  .input {
  padding-left: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: 1px;
  
  box-sizing: border-box;
  }
  .input:hover {
  border: 2px solid grey;
  }
  .btn {
  width: 10rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: black;
  cursor: pointer;
  margin-top: 1.5rem;
  &:hover{
    background-color: white;
    color:black;
    border: 1px solid black;
  }
  }
  .inputs-container p {
  margin: 0;
  }
  .l {
  color: black;
  font-weight: 900;
  cursor: pointer;
  }
  .buttons{
  display:flex;
  flex-direction: row;
  gap: 0.5rem;
  }
  @media screen and (max-width: 1000px) {
  .login-container {
  width: 70%;
  margin-top: 3rem;
  }
  .login-info-container {
  width: 60%;
  
  border-radius: 5px;
  }
  .image-container {
  display: none;
  }
  }
  @media screen and (max-width: 650px) {
  .login-container {
  width: 50%;
  }
  }
  @media screen and (max-width: 500px) {
  .login-container {
  height: 90%;
  }
  .social-login {
  flex-direction: column;
  align-items: center;
  height: 30%;
  }
  .login-info-container > p {
  margin: 0;
  }
  }
`

export default Login;