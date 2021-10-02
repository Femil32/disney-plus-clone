import React from 'react'
import styled from 'styled-components'
function Movies() {
    return (
        <Container>
            <Title>
                <h2>Recomanded for you</h2>
            </Title>
            <Content>
                <Wrap>
                    <img src='https://source.unsplash.com/1000x500/?nature,water' alt='disney' />
                </Wrap>
                <Wrap>
                    <img src='https://source.unsplash.com/1000x500/?nature,water' alt='disney' />
                </Wrap>
                <Wrap>
                    <img src='https://source.unsplash.com/1000x500/?nature,water' alt='disney' />
                </Wrap>
                <Wrap>
                    <img src='https://source.unsplash.com/1000x500/?nature,water' alt='disney' />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    margin: 40px 0;
    h2 {
        margin-bottom: 15px;
    }
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Content = styled.div`
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
    border: 1px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.25s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        border: 2px solid rgba(249, 249, 249, 0.5);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
