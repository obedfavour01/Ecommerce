import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoriesItem from './CategoriesItem'
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({flexDirection :'column',alignItems : 'center'})};
${mobile({padding:'0px'})}
${tablet({flexDirection :'column',alignItems : 'center'})}

`
function Categories() {
    return (
     <Container>

            {categories.map(item => (
                <CategoriesItem item= {item} key = {item.id}/>
            ))}

     </Container>
    )
}

export default Categories
