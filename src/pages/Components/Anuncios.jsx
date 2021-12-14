import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
`

const Anuncios = () => {
    return (
        <Container>
            Super oferta! Frete grátis para compras acima de R$50
        </Container>
    )
}

export default Anuncios
