import React,{useState}from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div``

const Title = styled.h1`
margin: 20px;
`

const FilterContainer = styled.div`
display: flex;
justify-content : space-between;


`

const Filter = styled.div`
${mobile({display:'flex', flexDirection: 'column',marginLeft:'5px'})}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({fontSize: '1em'})}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({width: '60%', marginTop:'5px'})}
`
const Option = styled.option``

function ProductList() {

  const Location = useLocation()
  const cat = Location.pathname.split('/')[2]

  const [filters,setFilter] = useState({})

  const [sort, setSort] =  useState('newest')
  const handleFilters = (e) => {
    const value = e.target.value;

    setFilter({
      ...filters,
      [e.target.name] : value
    })
  }
  console.log(filters)
    return (
      <Container>
      
          <Navbar/>
          <Announcement/>
          <Title>Dresses</Title>
          <FilterContainer>
            <Filter>
              <FilterText> Filter Products:</FilterText>

              <Select onChange={handleFilters} name= 'color'>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                  <Option>Yellow</Option>
                  <Option>Green</Option>
              </Select>
              
              <Select onChange={handleFilters} name= 'size'>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
      
              </Select>
              
            </Filter>
            <Filter>
              <FilterText> Sort Products:</FilterText>
              
              <Select onChange={e => setSort(e.target.value)}>
                <Option value = 'newest'>Newest</Option>
                <Option value = 'asc'>Price(asc)</Option>
                <Option value = 'desc'>Price(desc)</Option>
               
              </Select>
              
              
              </Filter>
          </FilterContainer>
          <Products cat = {cat} filters = {filters} sort ={sort}/>
          <NewsLetter/>
          <Footer/>
      </Container>
    
    )
}

export default ProductList
