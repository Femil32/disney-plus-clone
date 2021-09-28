import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <Logo src="images/logo.svg"/>
            <Navbar>
                <a href="!#">
                    <img src="images/home-icon.svg" alt="home"/>
                    <span>Home</span>
                </a>
                <a href="!#">
                    <img src="images/search-icon.svg" alt="search"/>
                    <span>Search</span>
                </a>
                <a href="!#">
                    <img src="images/watchlist-icon.svg" alt="watchlist"/>
                    <span>Watchlist</span>
                </a>
                <a href="!#">
                    <img src="images/original-icon.svg" alt="original"/>
                    <span>Original</span>
                </a>
                <a href="!#">
                    <img src="images/movie-icon.svg" alt="movie"/>
                    <span>Movie</span>
                </a>
                <a href="!#">
                    <img src="images/series-icon.svg" alt="series"/>
                    <span>Series</span>
                </a>
            </Navbar>
            <UseImg src="https://source.unsplash.com/user/erondu/40x40/" /> 
        </Nav>
    )
}

export default header


const Nav = styled.nav`
    height:70px;
    background-color:#090b13;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    color:white;
`

const Logo = styled.img`
    width:80px;
`

const Navbar = styled.div`
    display:flex;
    flex:1;
    margin-left:20px;

    a{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0 12px;
        outline:none;

        &:hover{
            span::after {
                transform:scaleX(1);
                opacity:1;
            }
        }

        img{
            height:20px;
        }

        span{
            position:relative;
            font-size:13px;
            letter-spacing:1.42px;
            text-transform:uppercase;
            padding-left:3px;
            
            &::after{
                content:'';
                position:absolute;
                bottom:-6px;
                left:0;
                right:0;
                height:2px;
                background:#fff;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scaleX(0);
                opacity:0;
            }
        }
    }
`

const UseImg = styled.img`
    border-radius:50%;
    border:1px solid #fff;
    outline:none;
    cursor:pointer;
`
