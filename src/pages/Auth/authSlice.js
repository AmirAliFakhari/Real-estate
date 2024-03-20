import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: null,
        userRole: null
    },
    reducers: {
        userRole: (state, action) => {
            state.userRole = action.payload
        },
        userData: (state, action) => {
            state.userData = action.payload
        }

    }
})

export const { userRole, userData } = authSlice.actions


export default authSlice.reducer

