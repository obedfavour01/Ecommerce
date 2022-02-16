import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import wahaleux from '../data2'
import Product from './Product'
import axios from 'axios'


const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`
function Products({filters,sort,cat}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(()=> {
        const getProducts = async () => {
            try {
                const getit = await axios.get('http://localhost:4000/api/products')
                    console.log(getit)
            }
            catch(err){

         
            }
        }
        getProducts()
    },[cat])
    return (
    <Container>
        { wahaleux.map(item => (
            <Product item = {item} key={item.id}/>
        ))}

    </Container>
    )
}

export default Products
