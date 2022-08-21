import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaGooglePlus } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { publicRequest } from '../request';
import { login } from "../features/serverCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {

  const [trigger, setTrigger] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    window.location.reload();
  };

    return (props.trigger) ? ( 
      <Wrapper>
        <div className="containerlogin">
          <div className="login-info-container">
            <img id="image" src={require('../assets/login4.svg').default} alt='mySvgImage' />
            <h1 className="title"> login </h1>
            <form className="inputs-container">
                <input 
                className="input" 
                type="text" 
                name="username"
                value={username}
                placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}/>
                <input 
                className="input" 
                type="password" 
                name="password"
                value={password}
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}/>
                <div className="buttons">
                <button className="btn" onClick={handleSubmit} disabled={isFetching}> Login</button>
                <button className="btn" onClick={() => props.setTrigger(false)}> Close </button> 
                </div>
                {error && <p>Something went wrong...</p>}
                <p>Still not registered ? <Link to="/register" style={{ textDecoration: 'none' }}><span className="span"> Create an account </span> </Link></p>      
            </form>
            <div className="subcontainer">
                <p> or  </p>
                <div className="icones">
                  <BsFacebook/>
                  <AiFillTwitterCircle/>
                  <BsGithub/>
                  <FaGooglePlus/>
                </div>
            </div>
          </div>
          </div>
      </Wrapper>
    ) : "";
}

const Wrapper = styled.div`

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
  margin-top: 0.5rem;
  text-transform: capitalize;
  font-size: 2.6rem;
  font-weight: 1300;
  letter-spacing: 1px;
  color: black;
  font-family: 'Heebo', sans-serif;

}

.login-info-container > p {
  font-size: 1.25em;
  margin-top: 1.5em;
}

.inputs-container {
  margin-top: 0.5rem;
  height: 55%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
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
  width: 9.2rem;;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  cursor: pointer;
  margin-top: 1.5rem;
}

.inputs-container p {
  margin: 0;
}

.span {
  color: #3f51b5;
  font-weight: 800;
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
      width: 100%;
      border-radius: 5px;
  }
  
  .image-container {
      display: none;
  }  
}

@media screen and (max-width: 650px) {
  .login-container {
      width: 90%;
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