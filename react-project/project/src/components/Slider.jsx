import {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import sliderItems from '../data' 
import {mobile} from '../responsive'
import {tablet} from '../responsive'



const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    background-color: whitesmoke;
    position: relative;
    overflow: hidden;
    ${mobile({display:'none'})};
    ${tablet({display:'none'})}

`
const Arrow = styled.div`
    width:40px;
    height:40px;
    background-color: #fff7f7;
    border-radius : 50%;
    display: flex ;
    align-items:center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left : ${props => props.direction === 'left' &&  '10px'};
    right : ${props => props.direction === 'right' &&  '10px'};
    cursor:pointer;
    opacity: 0.5;
    z-index: 2;


`

const Wrapper = styled.div`
height: 100%;
border : 2px solid black;
display: flex;
transform : translateX( ${props => props.slide * -100}vw);
transition: all 2s ease-in-out;

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color : #${props => props.bg}
`

const ImgContainer = styled.div`
flex:1;
height: 100%;

`
const Image = styled.img`
        width: 100%;
`
const InfoContainer = styled.div`
flex: 1;
padding:50px;
position: relative;

`
const Text = styled.div`
position: absolute;
top : 40%;
`
const Title = styled.h1`
    font-size : 3em;

`
const Desc = styled.p`
margin : 30px 0px;
font-weight: 500;
letter-spacing: 3px;
`


const Button = styled.button`
padding: 15px;
background-color: transparent;
cursor:pointer;

`


function Slider() {
    const[slideIndex, setSlideIndex] = useState(0)


    const handleClick = (direction) => {
            if(direction === 'left'){
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
            }
            else {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            }
    }
           
                     
   
      const Zoe =  sliderItems.map((item) =>
        
        
        <Slide bg = {item.bg} key = {item.id}>
              <ImgContainer>
              <Image src = {item.img}/> 
              
              </ImgContainer>
              <InfoContainer>
                  <Text>
                  <Title>{item.title}</Title>
                 <Desc>{item.desc}</Desc>
                 <Button>SHOP NOW</Button>
                 </Text>
              </InfoContainer>
         </Slide>
    
    )                
    
    return (
     <Container>
         <Arrow direction = 'left' onClick = {() => handleClick('left')}>
             <ArrowLeftOutlined/>
         </Arrow>

         <Wrapper slide = {slideIndex}>
            {Zoe}
         </Wrapper>
         <Arrow direction = 'right' onClick = {() => handleClick('right')}>
             <ArrowRightOutlined/>  
         </Arrow>
     </Container> 
    )
}

export default Slider
