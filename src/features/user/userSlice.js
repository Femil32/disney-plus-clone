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
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
            state.loading = false
        },
        setSignOutState: state => {
            state.name = null
            state.email = null
            state.photo = null
            state.loading = false
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})

export const { setUserLoginDetails, setSignOutState, setLoading } = userSlice.actions

export default userSlice.reducer
