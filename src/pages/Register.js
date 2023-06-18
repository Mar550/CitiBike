import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { publicRequest } from '../request';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../features/userRedux';

 
const Register = () => {

  const [data, setData] = useState({
    email:"",
    username:"",   
    password:"",
  })

  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  
  const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]:input.value })
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(data))
  };

  useEffect(()=> {
    if(localStorage.getItem('user-info'))
      {
        navigate("/")
      }
  },[])

  return (
    <Wrapper>
        <Navbar/>
        <Announcement/>
        <Container>
            <Form className="inputs-container" onSubmit={handleSubmit} >
            <Title className="title"> Create an account </Title>
                <Row>
                    <Span className="span"> E-mail Address </Span>
                    <Input 
                    className="input" 
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={handleChange}
                    />
                </Row>
                <Row>
                    <Span className="span"> Username </Span>
                    <Input 
                    className="input" 
                    type="text" 
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    />
                </Row>
                <Row>
                    <Span className="span"> Password </Span>
                    <Input 
                    className="input" 
                    type="password" 
                    name="password"
                    value={data.password} 
                    onChange={handleChange}
                    />
                </Row>
                <Button className="btn" type="submit" onClick={handleSubmit}> Submit </Button>
                <Text> Already registered ? <Link to="/login" style={{ textDecoration: 'none' }}><span className="span"> Sign In </span> </Link></Text>
            </Form>            
          </Container>
          <div style={{height:"4rem"}}>  </div>
          <Footer/>
      </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: auto;
background-color: #eee;
`

const Container = styled.div`
position: relative;
width: 30%;
display: flex;
margin-top: 3rem;
flex-direction: column;
padding: 3rem ;
background-color: white;
gap: 20px;
border-radius: 5px;
margin-left:auto;
margin-right: auto;
`

const Form = styled.form`
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
  height: 1.3rem;
  padding: 5px ;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 1200;
  margin-bottom: 2rem;
`

const Subtitle = styled.h3`
text-align: center;
font-size: 1rem;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align:center;
`
const Text = styled.p`
  text-align:center;
  font-size: 1rem;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  fon-weight: 800;
`

export default Register;