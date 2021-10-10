import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers-disney.png' alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/disney.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-pixar.png' alt='pixar' />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/pixar.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-marvel.png' alt='marvel' />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/marvel.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-starwars.png' alt='starwars' />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/star-wars.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-national.png' alt='national' />

                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='/videos/national.mp4' type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin: 60px 0 0;
    display: grid;
    justify-content: center;
    align-content: center;
    column-gap: 2rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media (max-width: 768px) {
        column-gap: 1rem;
        row-gap: 1rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        place-items: center;
    }
`

const Wrap = styled.div`
    position: relative;
    border: 2px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.25s;
    cursor: pointer;
    overflow: hidden;
    @media (max-width: 425px) {
        &:nth-child(1) {
            grid-column: 1/3;
            align-self: center;
            justify-self: center;
        }
    }

    &:hover {
        transform: scale(1.03);
        border: 2px solid rgba(249, 249, 249, 0.5);
        video {
            display: block;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
    video {
        transition: all 250ms linear;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        pointer-events: none;
        display: none;
    }
`
