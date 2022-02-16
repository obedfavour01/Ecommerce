import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`
flex:1;
margin: 5px 8px;
height: 70vh;
position: relative ;

`


const Image = styled.img`
width:100%;
height: 100%;
object-fit:cover;

${mobile({height: '30vh', width: '70vh'})}
`
const InfoContainer = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
`
const Title = styled.h1`
color : white;
margin-bottom: 20px;
${mobile({fontSize: '18px', textAlign:'center'})};
`
const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor:pointer;
font-weight:600;
transition: all 0.8s ease-in;

&:hover {
  transform : scale(1.1)
}
`
function CategoriesItem({item}) {
    return (
      <Container>
          <Link to = {`/products/${item.cat}`}>
            <Image src = {item.img}/>
           <InfoContainer>
             <Title>{item.title}</Title>
             <Button>SHOP NOW</Button>
             
           </InfoContainer>
         </Link>
      </Container>
    )
}

export default CategoriesItem
 