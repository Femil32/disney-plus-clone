import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { setLoading } from '../features/movie/movieSlice'
import db from '../firebase'

const Detail = props => {
    const { id } = useParams()
    const [detailData, setDetailData] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading(true))
        db.collection('movies')
            .doc(id)
            .get()
            .then(doc => {
                if (doc.exists) {
                    setDetailData(doc.data())
                } else {
                    console.log('no such document in firebase 🔥')
                }
            })
            .catch(error => {
                console.log('Error getting document:', error)
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setLoading(false))
                }, 100)
            })
    }, [id, dispatch])

    return (
        <Container>
            <Background>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </Background>
            <ImageTitle>
                <img alt={detailData.title} src={detailData.titleImg} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <BtnGroup>
                        <Player>
                            <img src='/images/play-icon-black.png' alt='' />
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <img src='/images/play-icon-white.png' alt='' />
                            <span>Trailer</span>
                        </Trailer>
                    </BtnGroup>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src='/images/group-icon.png' alt='' />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>{detailData.subTitle}</SubTitle>
                <Description>{detailData.description}</Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    height: 100%;
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);
    @media (max-width: 768px) {
        top: 75px;
    }
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    img {
        width: 100vw;
        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: 0 70px;
        }
    }
`

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 25vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
        @media (max-width: 768px) {
            max-width: 300px;
            min-width: 135px;
        }
    }
`

const ContentMeta = styled.div`
    max-width: 874px;
`

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
            width: 25px;
        }
    }
`

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const BtnGroup = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    @media (max-width: 768px) {
        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-bottom: 10px;
        ${Player} {
            margin: 0;
            width: 100%;
        }
    }
`

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
        img {
            width: 100%;
        }
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export default Detail
