import React from 'react'

const Signup = () => {
  return (
    <>
        <Wrapper>
        <Container>
            <Logo> Citibike </Logo>
            <Title className="title"> Register in our website </Title>
            <Form className="inputs-container" onSubmit={handleSubmit} >
                <Row>
                    <Span className="span"> E-mail </Span>
                    <Input 
                    className="input" 
                    type="text" 
                    value={data.email} 
                    onChange={handleChange}
                    name="email" />
                </Row>
                <Row>
                    <Span className="span"> Username</Span>
                    <Input 
                    className="input" 
                    type="text" 
                    value={data.username}
                    onChange={handleChange}
                    name="username"/>
                </Row>
                <Row>
                    <Span className="span"> Password</Span>
                    <Input 
                    className="input" 
                    type="password" 
                    value={data.password} 
                    onChange={handleChange}
                    name="password"/>
                </Row>
                <Row>
                    <Span className="span"> Confirm password</Span>
                    <Input 
                    className="input" 
                    type="password" 
                    value={data.password} 
                    onChange={handleChange}
                    name="password"/>
                </Row>
                <Button className="btn" type="submit" onClick={handleSubmit}> Create An Account </Button>
                {error && <p>Something went wrong...</p>}
                <Text> Already registered ? <Link to="/login" style={{ textDecoration: 'none' }}><span className="span"> Sign In here </span> </Link></Text>
            </Form>            
          </Container>
      </Wrapper>
    </>
  )
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
margin-top: 1.5rem;
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
const Logo = styled.h1`
    font-weight: bold;
    text-align:center;
`
const Text = styled.p`
  text-align:center;
  font-size: 1rem;
`


export default Signup