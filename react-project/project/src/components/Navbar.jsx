import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {mobile} from '../responsive'
import {tablet} from '../responsive'


import {Link} from 'react-router-dom'
const Container = styled.div`
    height: 60px;
    width: 100vw;
    margin-top : 0px;
  ${mobile({height : '50px'})};

`
const Wrapper = styled.div`
    padding: 10px 20px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
        ${tablet({padding:'10px 0px'})}

        ${mobile({padding : '10px 0px',
        justifyContent:'center',
        alignItems: 'center',
    })};


`
const Left = styled.div`
flex:1;
display:flex;
align-items: center;


${tablet({justifyContent:'center', padding: '0px',flex:1})};

`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${tablet({display: 'none'})}
    ${mobile({display: 'none'})}
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: center;
${tablet({flex:2,justifyContent:'flex-start'})}

${mobile({justifyContent:'center'})};

`
const Center = styled.div`
flex:1;
text-align:center;
padding-top:0px;
${tablet({marginLeft:'0px'})};
${tablet({flex:1})}
${mobile({ padding: '0px'})};

`
 export const Logo = styled.div`
    font-weight :700;
    font-size: 1.6em;
    text-align:center;
    margin-top:9px;
    ${tablet({textAlign: 'center'})}
    ${mobile({fontSize :'1.3em',padding: '0px'})};
  
`
const SearchContainer = styled.div`
        display: flex;
        border: 0.7px solid lightgray;
        margin-left:25px;
        height: 30px;
       
        ${tablet({height:'25px',marginLeft:'0px'})}
        ${mobile({height:'20px',display: 'flex',alignItems:'center'})};
    
`
const Input = styled.input`
    border: none;
  
    &:focus{
        outline:none;
    }       
    ${tablet({width:'60px'})}
    ${mobile({width: '50px'})};
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0px 7px;
    font-weight:400;
    ${mobile({fontSize: '10px',marginLeft:'5px'})};
`





function Navbar() {
    return (
       <Container>
           <Wrapper>
             
               <Left>

                   <Language>EN</Language>
                   <SearchContainer>
                        <Input placeholder = 'Search'/>
                        <Search style = {{color:'gray',fontSize:16,marginTop:'9px',cursor:'pointer'}}/>
                   
                   </SearchContainer>
               </Left>
               <Center>

                <Logo>OBED.</Logo>

               </Center>
               <Right>
                   <MenuItem><Link to = 'register'>REGISTER</Link></MenuItem>
                   <MenuItem><Link to = 'login'>SIGN IN</Link></MenuItem>
                   <MenuItem>
                        <IconButton aria-label="cart">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartOutlined color = 'action'/>
                            </Badge>
                        </IconButton>
                   </MenuItem>
               </Right>
               
              
           </Wrapper>
    
       </Container>
          
        
    )
}

export default Navbar
