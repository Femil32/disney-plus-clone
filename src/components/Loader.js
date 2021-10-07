import React from 'react'
import styled from 'styled-components'

function Loader() {
    return (
        <Loading>
            <img src='/images/loading.svg' alt='loading' />
        </Loading>
    )
}

export default Loader

const Loading = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
`
