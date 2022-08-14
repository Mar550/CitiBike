import React,{useState} from "react";
import styled from "styled-components";
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaGooglePlus} from 'react-icons/fa';
import {FaWindowClose} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { publicRequest } from '../request';


const Login = (props) => {

  const [trigger, setTrigger] = useState(false);

  const [data, setData] = useState({
    username:"",
    password:"",
  })

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]:input.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
        const res = await publicRequest.post("/auth/login/",data);
        localStorage.setItem("token", res.data);
        window.location = "/"
        console.log(res.message)
    } catch(error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
  }

    return (props.trigger) ? ( 
      <Wrapper>
        <div className="containerlogin">
          <div className="login-info-container">
            <FaWindowClose className="close-icon" onClick={() => props.setTrigger(false)}/>
            <h1 className="title"> SIGN IN</h1>
            <img id="image" src={require('../assets/login2.svg').default} alt='mySvgImage' />
            <form className="inputs-container" onSubmit={handleSubmit}>
                <input 
                className="input" 
                type="text" 
                placeholder="Username" 
                name="username" 
                onChange = {handleChange}/>
                <input 
                className="input" 
                type="password" 
                placeholder="Password" 
                name="username" 
                onChange = {handleChange}/>
                <button className="btn" type="submit"> Login</button>
                <p>Still not registered ? <Link to="/register"><span className="span"> Create an account </span> </Link></p>      
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

.close-icon{
  font-size: 2rem;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
}
.login-info-container {
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #f8f3ff;
  gap: 20px;
  border-radius: 5px;
  margin-top: 1.5rem;
  margin-left:auto;
  margin-right: auto;
}

#image{
  width: 45%;
}

.title {
  margin-top: 0.5rem;
  text-transform: capitalize;
  font-size: 2.6rem;
  font-weight: 1300;
  letter-spacing: 1px;
  color: black;
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
  height: 3rem;
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
  margin-top: 1.5rem;
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

export default Login;