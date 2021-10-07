import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NotFound() {
    return (
        <Notfound>
            <Content>
                <h1>404</h1>
                <p>Something went wrong, Please try again</p>
                <Link to='/'>
                    <HomeBtn>Disney+ Hotstar &nbsp; HOME</HomeBtn>
                </Link>
            </Content>
        </Notfound>
    )
}

export default NotFound

const Notfound = styled.div`
    margin: 70px 0 0 0;
    height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    text-align: center;
    h1 {
        font-size: 10vw;
    }
    p {
        letter-spacing: 1px;
    }
`
const HomeBtn = styled.div`
    margin-top: 25px;
    padding: 8px 16px;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    transition: all 250ms;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`
