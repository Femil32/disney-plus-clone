import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'

function Home() {
    useEffect(() => {
        db.collection('movies').onSnapshot(snapshot => {
            let tempMovies = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
        })
    }, [])
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 70px calc(2.5vw + 5px) 40px;
    overflow-x: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        z-index: -1;
    }
`
