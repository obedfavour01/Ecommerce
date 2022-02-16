import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items:center;
    font-size: 0.7em;
    text-align: center;
    justify-content: center;
`

function Announcement() {
    return (
        <Container>
            Super Deal! Free Shipping on orders over $50
        </Container>
    )
}

export default Announcement
