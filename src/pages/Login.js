import React from 'react'
import styled from 'styled-components'
import avatar from "../assets/avatar.png";

const Login = () => {
  return (
    <Wrapper> 
    <div className="container">
        <div className="wrap">
        <img className="image" src={avatar}/>
        <h1 className='title'> Sign In  </h1>
        <form className='form'>
                <input placeholder='Enter your username ...'/>
                <input placeholder='Enter your password ...'/>
            <button className='button'> LOGIN </button>
        </form>
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://siliconcanals.com/wp-content/uploads/2022/04/Mokumono-Polder.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;    
}

.wrap{
    width: 30%;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.title{
    font-size: 35px;
    font-weight: bold; 
    text-align:center;  
    margin-top: 1rem;     
}

.form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top:2rem;
    gap:1rem;
    text-align:center;
}

input{
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
}

.agreement{
    font-size: 12px;
    margin: 20px 0px;
}

.button{
    width: 40%;
    height: 70%;
    border: none;
    padding: 15px 20px;
    background-color: #13aec0;
    color: white;
    cursor: pointer;
    font-weight:bold;
    margin-top: 2em;
    margin-left:auto;
    margin-right:auto;
    border-radius: 10px;
}

.button:hover{
    background: black;
}

.submit{
    display:flex;
    margin-top: 15px;
}

.image{
    width: 40%;
    display:block;
    margin-left: auto;
    margin-right: auto;
}

input{
    font-weight: bold;
    font-size: 90%;
}
`

export default Login