import React,{useState} from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { publicRequest } from '../request';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaGooglePlus} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {

  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [user, setUser] = useState({});

  const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]:input.value })
  }

  const navigate = useNavigate();

  const handleSubmit = async () => {
      try {
          const res = await publicRequest.post("/auth/register/",data);
            console.log(res);
            console.log("ok");
            window.location = "/"
      } catch(error) {}
  };


  return (
    <Wrapper>      
      <div className="container">
      <Navbar/>
      <div className="login-container">
        <img id="image" src={require('../assets/access.svg').default} alt='mySvgImage' />
          <div className="login-info-container">
            <h1 className="title"> SIGN UP  </h1>
            <form className="inputs-container" onSubmit={handleSubmit} >
                <input 
                className="input" 
                type="text" 
                placeholder="E-mail"
                value={data.email} 
                onChange={handleChange}
                name="email" />
                <input 
                className="input" 
                type="text" 
                placeholder="Username"  
                value={data.username}
                onChange={handleChange}
                name="username"/>
                <input 
                className="input" 
                type="password" 
                placeholder="Password"
                value={data.password} 
                onChange={handleChange}
                name="password"/>
              
                <button className="btn" type="submit"> Create An Account </button>
                <p> Already registered ? <Link to="/login"><span className="span"> Sign In here </span> </Link></p>
            </form>
            <div className="subcontainer">
                <p> or you can use </p>
                <div className="icones">
                  <BsFacebook/>
                  <AiFillTwitterCircle/>
                  <BsGithub/>
                  <FaGooglePlus/>
                </div>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`



.icones{
  margin-top: 1rem;
  display:flex;
  gap: 1rem;
  font-size: 2.5rem;
  cursor:pointer;
}

.login-container {
  height: 50em;
  width: 80em;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  gap: 3rem;

}

.login-info-container {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #E8E8E8;
  gap: 20px;
  margin-top: 3rem;
  height: 40rem;
}

.image-container {
  padding: 2rem;
  width: 50%;
  background-color: #eadbff;
  box-sizing: border-box;
}

.title {
  margin-top: 3rem;
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
  width: 80%;
  height: 1.875rem;
  position: relative;
  top: 0;
  left: -0.625rem;
}

#image{
  width: 45%;
  margin-left: 4rem;
  margin-top: -3rem;
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
  align-items: center;
  gap: 10px;
}

.input {
  width: 90%;
  height: 3.125rem;
  font-size: 1em;
}

.btn{
  margin-top: 20px;
  width: 90%;
  height: 3.125rem;
  font-size: 1em;
}

.input {
  padding-left: 20px;
  border: none;
  border-radius: 5px;
  font-weight: 400;
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

export default Register;