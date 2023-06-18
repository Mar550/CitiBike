import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ToasContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginStart, loginSuccess, loginFailure } from "../features/userRedux";
import { publicRequest } from "../request";
const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = async(e) => {
    e.preventDefault();
    await publicRequest.post("/auth/login", { username, password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

    return (props.trigger) ? ( 
      <Wrapper>
        <Container>
            <Image/>
            <Title className="title"> Login to your account </Title>
            <Subtitle className="subtitle"> And access all our products..... </Subtitle>
            <Form>
                <div className="row" style={{ display:"flex", flexDirection:"column",gap:"0.3rem"}}>
                <Span className="span"> Username</Span>
                <Input 
                className="input" 
                type="text" 
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="row" style={{ display:"flex", flexDirection:"column",gap:"0.3rem"}}>
                <Span className="span"> Password </Span>
                <Input 
                className="input" 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                <Button className="btn" onClick={handleSubmit} > Submit </Button>
                <Button className="btn" onClick={() => props.setTrigger(false)}> Close </Button> 
                </div>
                <Text>Still not registered ? <Link to="/register" style={{ textDecoration: 'none' }}><span className="span"> Create an account </span> </Link></Text>      
            </Form>
          </Container>
      </Wrapper>
    ) : "";
}

const Wrapper = styled.div`

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
`

const Container = styled.div`
font-family:Helvetica Neue;
position: relative;
width: 30%;
display: flex;
flex-direction: column;
padding: 3rem ;
background-color: white;
gap: 20px;
border-radius: 5px;
margin-top: 5%;
margin-left:auto;
margin-right: auto;
`

const Form = styled.form`
margin-top: 1.5rem;
  display: flex;
  flex-direction:column;
  gap: 1rem;
`

const Button = styled.button`
  margin-top: 1rem;
  background-color: black;
  color: white;
  border:none;
  height: 3rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover{
    cursor:pointer;
  }
`

const Span = styled.p`

`

const Input = styled.input`
  height: 1.5rem;
  padding: 5px ;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 1200;
`

const Subtitle = styled.h3`
text-align: center;
font-size: 1rem;
`

const Image = styled.img`

`
const Text = styled.p`
  text-align:center;
  font-size: 1rem;
`


export default Login;