import React from "react";
import styled from "styled-components";
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaGooglePlus} from 'react-icons/fa';

const LoginB = () => {
    return (
      <Wrapper>
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title"> SIGN IN</h1>
            <form className="inputs-container">
                <input className="input" type="text" placeholder="Username"/>
                <input className="input" type="text" placeholder="Password"/>
                <p>Forgot your password? <span className="span"> Click here </span></p>
                <button className="btn">login</button>
                <p>Still no registered ? <span className="span"> Create an account </span></p>      
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
          <img src={require('../assets/login.svg').default} alt='mySvgImage' />
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.div`


.icones{
  display:flex;
  gap: 10px;
  font-size: 2rem;
  margin-top: 10px;
}

.login-container {
  margin-top: 4rem;
  margin-left: 8rem; 
  height: 30em;
  width: 65em;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  gap: 4rem;
  displ
}

.login-info-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 0.5rem;
  background-color: #f8f3ff;
  gap: 20px;
}

.image-container {
  padding: 2rem;
  width: 50%;
  background-color: #eadbff;
  box-sizing: border-box;
}

.title {
  margin-top: 1rem;
  text-transform: capitalize;
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: black;
}

.social-login {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
}

.social-login-element {
  width: 12.5rem;
  height: 3.75rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 5px;
  border: 1px solid #674baf;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-login-element img {
  width: 1.875rem;
  height: 1.875rem;
  position: relative;
  top: 0;
  left: -0.625rem;
}

.social-login-element:hover {
  background-color: #fff;
}

.login-info-container > p {
  font-size: 1.25em;
  margin-top: 1.5em;
}

.inputs-container {
  margin-top: 1.5rem;
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
  height: 3.125rem;
  font-size: 1em;
}

.input {
  padding-left: 20px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: 1px;
  box-sizing: border-box;
}

.input:hover {
  border: 2px solid black;
}

.btn {
  width: 80%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #008080;
  cursor: pointer;
}

.inputs-container p {
  margin: 0;
}

.span {
  color: #008080;
  font-weight: 600;
  cursor: pointer;
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

export default LoginB;