import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movies from './Movies'
import db from '../../firebase'
import {
    setRecommended,
    setNewDisney,
    setOriginal,
    setTrending,
    setLoading,
} from '../../features/movie/movieSlice'

function MovisTab() {
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movie)

    useEffect(() => {
        const recommended = []
        const newDisney = []
        const original = []
        const trending = []
        dispatch(setLoading(true))
        db.collection('movies').onSnapshot(snap => {
            snap.docs.map(doc => {
                switch (doc.data().type) {
                    case 'recommended':
                        recommended.push({ id: doc.id, ...doc.data() })
                        break
                    case 'new':
                        newDisney.push({ id: doc.id, ...doc.data() })
                        break
                    case 'original':
                        original.push({ id: doc.id, ...doc.data() })
                        break
                    case 'trending':
                        trending.push({ id: doc.id, ...doc.data() })
                        break
                    default:
                        break
                }
            })
            dispatch(setRecommended(recommended))
            dispatch(setTrending(trending))
            dispatch(setNewDisney(newDisney))
            dispatch(setOriginal(original))
            dispatch(setLoading(false))
        })
    }, [dispatch])

    return (
        // <Movies key={catagory} movieData={catagory} />
        <>
            {!movie.loading &&
                movie.trending !== undefined &&
                movie.original !== undefined &&
                movie.newDisney !== undefined &&
                movie.recommended !== undefined && (
                    <>
                        <Movies title={'Recommended for you'} data={movie.recommended} />
                        <Movies title={'New from Disney'} data={movie.newDisney} />
                        <Movies title={'Disney Original'} data={movie.original} />
                        <Movies title={'Trending around'} data={movie.trending} />
                    </>
                )}
        </>
    )
}

export default MovisTab
