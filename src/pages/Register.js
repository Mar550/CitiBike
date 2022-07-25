import React from 'react'
import styled from 'styled-components'

const Register = () => {
  return (
    <Wrapper> 
    <div className="container">
        <div className="wrap">
        <h1 className='title'> Create an account </h1>
        <form className='form'>
            <input placeholder='First name'/>
            <input placeholder='Lastname'/>
            <input placeholder='Email'/>
            <input placeholder='Password'/>
            <input placeholder='Confirm password'/>
            <div className='submit'>
            <div className='agreement'> By creating an account, i agree to the <b> terms & services </b> </div>
            <button className='button'> CREATE </button>
            </div>
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
    width: 40%;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.title{
    font-size: 24px;
    font-weight: bold; 
    text-align:center;       
}

.form{
    display: flex;
    flex-wrap: wrap;
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
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight:bold;
    border-radius: 10px;

}

.button:hover{
    background: black;
}

.submit{
    display:flex;
    margin-top: 15px;
}
`
export default Register