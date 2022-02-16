import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize :'3em'})};
`
const Desc = styled.div`
font-size: 24px;
fomt-weight: 300;
margin-bottom : 20px;
${mobile({fontSize :'1.2em', textAlign: 'center'})};
`

const InputContainer = styled.div`
width: 50%;
height:40px;
background-color: white;
display: flex;
border: 1px solid lightgray;
justify-content: space-between;

${mobile({width: '80%'})};
`

const Input = styled.input`
width: 90%;
padding-left: 20px;
border:none;


`

const Button = styled.button `
width: 10%;
background-color: teal;
color: white;
cursor:pointer;
border:none;
`

function NewsLetter() {
    return (
      <Container>
          <Title>Newsletter</Title>
          <Desc>Get Timely Update From Your Favourite Products</Desc>
          <InputContainer>
          <Input placeholder = 'Your E-mail'/>
          <Button>
              
              <Send/>
          </Button>
          </InputContainer>
      </Container>
    )
}

export default NewsLetter
