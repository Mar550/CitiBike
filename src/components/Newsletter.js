import React from 'react'
import styled from 'styled-components';
import { Send } from '@material-ui/icons';

const Newsletter = () => {
  return (
    <Wrapper>
    <div className="container">
       <h1 className="title"> Subscribe to ou Newsletter </h1> 
       <div className="description"> And get regular products updates from your favorite store.</div>
       <div className="inputContainer">
            <input className="input" />
            <button className="button"> <Send/> </button>
       </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container{
    margin-top: 7rem;
    height: 60vh;
    background-color: #E8E8E8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.title{
    font-size: 50px;
    margin-bottom: 20px;
}

.description{
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
}

.inputContainer{
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
}

.input{
    border: none;
    flex: 8;
    padding-left: 20px;
}

.button{
    flex: 1;
    border: none;
    background-color: #3f51b5;
    color: white;

}

`

export default Newsletter