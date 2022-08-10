import React from 'react'
import styled from 'styled-components'
import AssignmentIcon from '@material-ui/icons/Assignment';

const Register = () => {
  return (
    <Wrapper> 
    <div className="container">
        <div className="wrap">
        <div className = "divtitle">
        <AssignmentIcon className="icon"/>
        <h1 className='title'> Register </h1>
        </div>
        <form className='form'>
            <div>
            <input className="input" placeholder='First name'/>
            <input className="input" placeholder='Lastname'/>
            </div>
            <input className="input" placeholder='Username'/>
            <input className="input" placeholder='Email'/>
            <input className="input" placeholder='Password'/>
            <input className="input" placeholder= 'Confirm your password' />
            <div className='legal'> 
            
            <p> <input id="check" type="checkbox"/> By creating an account, i agree to the <b> terms & services </b> </p>
            </div>
            <div className='submit'>
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
    width: 100%;
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
    width: 38%;
    padding: 30px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.title{
    font-size: 3rem;
    font-weight: bold; 
}

.icon{
    font-size: 3rem;
    margin-top: 5px;
}

.divtitle{
    display:flex;
    flex-direction: row;
    gap: 10px;
}

.form{
    display: flex;
    flex-direction:column;
    margin-top: 2rem;
    gap: 5px;
}

.input{
    flex: 1;
    min-width: 40%;
    margin: 10px 10px 0px 0px;
    padding: 10px;
}

#check{
    width:auto;
}

.legal{
    font-size: 13px;
    margin-top: 2rem;
}

.button{
    width: 100%;
    height: 70%;
    border: none;
    padding: 15px 20px;
    background-color: #13aec0;
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