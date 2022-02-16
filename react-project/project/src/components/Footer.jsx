import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
const Container = styled.div`
height:55vh;
`
const Wrapper = styled.div`
margin-bottom: 10px;
display: flex;
height:50vh;
${mobile({flexDirection:'column',justifyContent:'center',height: '60vh',marginBottom: '10px'})};
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
${mobile({fontSize: '0.7em'})};
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
display: flex;
${mobile({justifyContent : 'space-around'})};

`

const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
background-color : #${props => props.color};
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
;


`
const Center = styled.div`
flex: 1;

padding: 20px;
${mobile({fontSize: '0.7em', display:'none',})};
`

const Title = styled.h3`
margin-bottom: 30px;

`

const List = styled.ul`
list-style-type: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`


const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({fontSize: '0.7em', flex: 1,backgroundColor: 'lightGray'})};

`


const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom:15px;
${mobile({margin : 'auto'})}
`

const Payment = styled.img``

function Footer() {
    return (
        <Container>
            <Wrapper>

      
            <Left>
                <Logo>OBED.</Logo>
                <Desc>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Vitae, quis non perferendis nobis autem hic enim fugit libero.
                     Ex, necessitatibus qui. Magni sequi adipisci, debitis fuga voluptatibus
                      architecto sint exercitationem?
                </Desc>

                <SocialContainer>
                    <SocialIcon color = '385999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon  color ='E4405F' >
                      <Instagram />
                    </SocialIcon>
                    <SocialIcon  color = 'E60023'>
                       <Pinterest/>
                    </SocialIcon>
                    <SocialIcon  color = '55ACEE'>
                      <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem> Home</ListItem>
                    <ListItem> Cart</ListItem>
                    <ListItem> Man fashion</ListItem>
                    <ListItem> Woman Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem> My Account</ListItem>
                    <ListItem> Order Tracking</ListItem>
                    <ListItem> Wishlist</ListItem>
                    <ListItem> Terms</ListItem>
                </List>
            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem>
                     <Room style = {{marginRight:10}}></Room>
                     47a Adeola Odeku, Victoria Island, Lagos.
             </ContactItem>
                <ContactItem> 
                    <Phone style = {{marginRight:10}}/>
                    +234 - 816 777 0000
             </ContactItem>
            <ContactItem> 
                    <MailOutline style = {{marginRight:10}}/>
                    contact@obedfavour@gmail.com
              </ContactItem>

                <Payment src = '' />
            </Right>

            </Wrapper>
        </Container>
    )
}

export default Footer
