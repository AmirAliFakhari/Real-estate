import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        isAuth: false
    },
    reducers: {
        userEmail: (state, action) => {
            state.email = action.payload
        },
        isAuthendticated: (state, action) => {
            state.isAuth = action.payload
        }

    }
})

export const { userEmail, isAuthendticated } = authSlice.actions

export default authSlice.reducer

