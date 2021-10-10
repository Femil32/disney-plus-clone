import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    name: '',
    email: '',
    photo: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state = initialState, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        setSignOutState: (state = initialState) => {
            state.name = null
            state.email = null
            state.photo = null
        },
        setLoading: (state = initialState, action) => {
            return {
                ...state,
                loading: action.payload,
            }
        },
    },
})

export const { setUserLoginDetails, setSignOutState, setLoading } = userSlice.actions

export default userSlice.reducer
