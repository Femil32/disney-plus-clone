import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img
                    src='https://i.pinimg.com/564x/b5/09/c0/b509c0b74cb92758c0cb9e2c57ce31a1.jpg'
                    alt=''
                />
            </Background>
            <MainContent>
                <Title>
                    <img src='images/frozen.png' alt='' />
                </Title>
                <ButtonGroup>
                    <PlayBtn>
                        <img src='images/play-icon-black.png' alt='' />
                        <span>Play</span>
                    </PlayBtn>
                    <TrailerBtn>
                        <img src='images/play-icon-white.png' alt='' />
                        <span>Trailer</span>
                    </TrailerBtn>
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    <TeamWatchBtn>
                        <img src='images/group-icon.png' alt='' />
                    </TeamWatchBtn>
                </ButtonGroup>
                <SubContent>
                    <SubTitles>
                        2018 <span>⚪</span> 7m <span>⚪</span> Family, Fantasy, Kids, Animation
                    </SubTitles>
                    <Description>
                        Princess Elsa of Arendelle possesses magical powers that allow her to
                        control and create ice and snow, often using them to play with her younger
                        sister, Anna. After Elsa accidentally injures Anna with her magic, their
                        parents, the King and Queen, take both siblings to a colony of trolls led by
                        Grand Pabbie. He heals Anna but alters her memories so that she forgets
                        about Elsa's magic.{' '}
                    </Description>
                </SubContent>
            </MainContent>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(2.5vw + 5px);
    overflow-x: hidden;
    max-width: 60vw;
    @media (max-width: 1024px) {
        max-width: 70vw;
    }
    @media (max-width: 768px) {
        max-width: 80vw;
    }
`

const Background = styled.div`
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.8;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const MainContent = styled.div`
    position: relative;
`
const Title = styled.div`
    max-width: 250px;
    max-height: 150px;
    height: 100%;
    width: 100%;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const PlayBtn = styled.button`
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 15px;
    padding: 6px 14px;
    margin-right: 22px;
    text-transform: uppercase;
    height: auto;
    background-color: rgb(249, 249, 249);
    border: none;
    outline: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background-color: rgb(198, 198, 198);
    }
    img {
        width: 25px;
    }
    span {
        margin-top: 2px;
    }
`
const TrailerBtn = styled(PlayBtn)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #fff;
    color: #ffff;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`
const AddBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid #fff;
    color: #ffff;
    cursor: pointer;
    margin-right: 22px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    span {
        display: inline-block;
        font-size: 30px;
        font-weight: 100;
    }
`
const TeamWatchBtn = styled(AddBtn)`
    img {
        width: 30px;
    }
`
const SubContent = styled.div`
    color: #fff;
`
const SubTitles = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    span {
        display: inline-block;
        font-size: 10px;
        margin: 0 5px;
    }
`
const Description = styled.div`
    margin-bottom: 20px;
`
