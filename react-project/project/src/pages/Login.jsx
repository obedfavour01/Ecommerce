import styled from 'styled-components'
import background from '../images/IMG_3179.JPG'
import {Logo} from '../components/Navbar'
import {mobile} from '../responsive'
const Container = styled.div`
width: 100vw;
height: 100vh;
background-image :linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.7)), url(${background});
background-size: cover;
background-repeat : no-repeat;
background-position: center;

display: flex;
align-items: center;
justify-content: center;

`

const Wrapper = styled.div`
padding: 20px;
width: 25%;
height: 40%;
background-color: white;
padding: auto;

${mobile({width:'75%'})}

`
const Title = styled.h1`
font-size: 24px;
font-weight: 100;
`
const Form = styled.form`
display: flex;  
flex-direction: column;
${mobile({justifyContent: 'space-between'})}

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
${mobile({marginTop: '20px'})}




`
const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
margin-top: 5px;
color:white;
${mobile({marginTop: '10px'})}
`
const Link = styled.a`
text-decoration: none;
`
const LinkContainer = styled.div`
display:flex;
justify-content: space-between;
margin-top: 20px;

`

function Login() {
    return (
    <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Logo></Logo>
                <Input placeholder = 'username'/>
                <Input placeholder = 'password' type = 'password'/>
                <Button>LOGIN</Button>
                <LinkContainer>
                    <Link href =''>Forgot Password?</Link>
                    <Link href = ''>Sign Up</Link>
                </LinkContainer>
               
    
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
