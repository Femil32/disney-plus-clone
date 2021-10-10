import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import db, { auth, provider } from '../firebase'
import { setUserLoginDetails, setSignOutState, setLoading } from '../features/user/userSlice'

const Header = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user)
    const movie = useSelector(state => state.movie)
    const [showUserProfile, setUserProfile] = useState(false)
    const [mobMenu, setMobMenu] = useState(false)
    const [MobMenuShow, setMobMenuShow] = useState(false)
    const nav = useRef()

    const handleAuth = () => {
        dispatch(setLoading(true))
        if (!user.name) {
            auth.signInWithPopup(provider)
                .then(result => {
                    setUser(result.user)
                })
                .catch(error => {
                    alert(error.message)
                })
                .finally(() => {
                    // history.push('/')
                    setTimeout(() => {
                        dispatch(setLoading(false))
                    }, 1000)
                })
        } else if (user.name) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState())
                    // history.push('/')
                })
                .catch(err => alert(err.message))
                .finally(() => {
                    setTimeout(() => {
                        dispatch(setLoading(false))
                    }, 1000)
                })
        }
    }
    const style = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
    }
    const setUser = user => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                loading: true,
            })
        )
    }

    useEffect(() => {
        const checkWindowWidth = () => {
            if (window.innerWidth > 768) {
                setMobMenu(false)
            } else {
                setMobMenu(true)
            }
        }
        auth.onAuthStateChanged(async user => {
            if (user) {
                setUser(user)
                history.push('/')
            }
        }, db.collection)

        window.addEventListener('resize', checkWindowWidth)
        checkWindowWidth()

        return () => {
            window.removeEventListener('resize', checkWindowWidth)
            checkWindowWidth()
        }
    }, [history, setUser, mobMenu])

    return (
        <>
            {(user.loading || movie.loading) && <Loader />}
            <Nav>
                <Logo href='/'>
                    <img src='/images/logo.svg' alt='Disney+' />
                </Logo>

                {!user.name ? (
                    <Login onClick={handleAuth}>Login</Login>
                ) : (
                    <>
                        <NavMenu ref={nav}>
                            {mobMenu && (
                                <SignOut>
                                    <img src={user.photo} alt={''} style={style} />

                                    {showUserProfile && (
                                        <DropDown>
                                            <p>{user.email}</p>
                                            <span onClick={handleAuth}>Sign out</span>
                                        </DropDown>
                                    )}
                                    {mobMenu && (
                                        <Menu
                                            onClick={() => {
                                                setMobMenuShow(false)
                                                nav.current.style.transform = 'translateX(100%)'
                                            }}
                                        >
                                            <img src='/images/close.svg' alt='menu' />
                                        </Menu>
                                    )}
                                </SignOut>
                            )}

                            <a href='/'>
                                <img src='/images/home-icon.svg' alt='HOME' />
                                <span>HOME</span>
                            </a>
                            <a href='/search'>
                                <img src='/images/search-icon.svg' alt='SEARCH' />
                                <span>SEARCH</span>
                            </a>
                            <a href='/watchlist'>
                                <img src='/images/watchlist-icon.svg' alt='WATCHLIST' />
                                <span>WATCHLIST</span>
                            </a>
                            <a href='/original'>
                                <img src='/images/original-icon.svg' alt='ORIGINALS' />
                                <span>ORIGINALS</span>
                            </a>
                            <a href='/movie'>
                                <img src='/images/movie-icon.svg' alt='MOVIES' />
                                <span>MOVIES</span>
                            </a>
                            <a href='/series'>
                                <img src='/images/series-icon.svg' alt='SERIES' />
                                <span>SERIES</span>
                            </a>
                            {mobMenu && (
                                <UserDetail>
                                    <p>{user.email}</p>
                                    <button
                                        onClick={() => {
                                            setUserProfile(!showUserProfile)
                                        }}
                                    >
                                        Sign Out
                                    </button>
                                </UserDetail>
                            )}
                        </NavMenu>
                        {!MobMenuShow && (
                            <SignOut>
                                <img
                                    src={user.photo}
                                    alt={''}
                                    style={style}
                                    onClick={() => {
                                        setUserProfile(!showUserProfile)
                                    }}
                                />

                                {showUserProfile && (
                                    <DropDown>
                                        <p>{user.email}</p>
                                        <span onClick={handleAuth}>Sign out</span>
                                    </DropDown>
                                )}
                                {mobMenu && (
                                    <Menu
                                        onClick={() => {
                                            setMobMenuShow(true)
                                            nav.current.style.transform = 'translateX(0)'
                                        }}
                                    >
                                        <img src='/images/menu.svg' alt='menu' />
                                    </Menu>
                                )}
                            </SignOut>
                        )}
                    </>
                )}
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 16px;
    z-index: 3;
    padding: 0 36px;
    @media (max-width: 768px) {
        padding: 0 16px;
    }
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`

const SignOut = styled.div`
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
`
const DropDown = styled.div`
    position: absolute;
    width: max-content;
    top: 50px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    p {
        margin-bottom: 10px;
        cursor: not-allowed;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    transition: transform 0.25s linear;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 8px 0 0 8px;
        z-index: 999;
        padding: 20px 15px;
        backdrop-filter: blur(2px);
        border: 2px solid #888;
        transform: translateX(100%);
        border-right: transparent;
        ${SignOut} {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 25px;
            ${DropDown} {
                display: none;
            }
        }
        a {
            padding: 0;
            margin-bottom: 10px;
            img {
                margin-right: 5px;
            }
        }
    }
`

const Login = styled.button`
    max-width: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 14px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 2px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    color: #fff;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const Menu = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    margin-left: 10px;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: invert(1);
    }
`

const UserDetail = styled.div`
    margin-top: auto;
    p {
        letter-spacing: 0;
        text-decoration: underline;
    }
    button {
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid black;
        outline: none;
        font-weight: bold;
        width: 100%;
        margin-top: 10px;
        border-radius: 5px;
    }
`

export default Header
