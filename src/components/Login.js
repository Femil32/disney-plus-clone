import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <LoginContent>
                <LOGO_ONE src='images/cta-logo-one.svg' alt='' />
                <LoginBtn
                    onClick={() => {
                        console.log(333)
                    }}
                >
                    Get all there
                </LoginBtn>
                <Description>
                    Get Premier Access to Raya and The Last Dragon for an additional fee with a
                    Disneyplus Subscription.
                    <br /> As of 03/26/21, the price of premier bundle incrrese by $1.
                </Description>
                <LOGO_TWO src='images/cta-logo-two.png' alt='' />
            </LoginContent>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('images/login-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        z-index: -1;
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 0 calc(2.5vw + 15px);
        margin: 15px 0;
    }
`

const LoginContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 750px;
    overflow: hidden;
    width: 100%;
`
const LOGO_ONE = styled.img`
    margin-bottom: 25px;
    width: 100%;
    @media (max-width: 768px) {
        max-width: 90%;
    }
`
const LoginBtn = styled.button`
    width: 100%;
    padding: 14px 18px;
    background: #0063e5;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    color: #ffffff;
    font-size: 17px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        padding: 8px 18px;
        font-size: 16px;
    }
`
const Description = styled.div`
    font-size: 13px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 25px;
    @media (max-width: 768px) {
        font-size: 11px;
    }
`
const LOGO_TWO = styled.img`
    width: 100%;
`
