import React from 'react'
import styled from 'styled-components'


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="disney" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="pixar" />
            </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="marvel" />
                </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="starwars" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="national" />
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container =styled.div`
    margin:60px 0 0;
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(5,minmax(0,1fr));
`

const Wrap =styled.div`
    border:1px solid rgba(249,249,249,0.1); 
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 0.25s;
    cursor:pointer;

    &:hover{
        transform:scale(1.05);
        border:2px solid rgba(249,249,249,0.5); 
    }

    img{
        width:100%;
        object-fit: cover;
    }
`
