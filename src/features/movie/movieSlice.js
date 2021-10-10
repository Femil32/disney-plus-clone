import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recommended: null,
    newDisney: null,
    original: null,
    trending: null,
    loading: false,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setRecommended: (state, action) => {
            return {
                ...state,
                recommended: action.payload,
            }
        },
        setNewDisney: (state, action) => {
            return {
                ...state,
                newDisney: action.payload,
            }
        },
        setOriginal: (state, action) => {
            return {
                ...state,
                original: action.payload,
            }
        },
        setTrending: (state, action) => {
            return {
                ...state,
                trending: action.payload,
            }
        },
        setLoading: (state, action) => {
            return {
                ...state,
                loading: action.payload,
            }
        },
    },
})

export const { setRecommended, setNewDisney, setOriginal, setTrending, setLoading } =
    movieSlice.actions

export default movieSlice.reducer
