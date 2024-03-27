import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: null,
        userRole: null,
        image_id: Math.random(),
        data: null
    },
    reducers: {
        userRole: (state, action) => {
            state.userRole = action.payload
        },
        userData: (state, action) => {
            state.userData = action.payload
        },
        data1: (state, action) => {
            state.data = action.payload
        }

    }
})

export const { userRole, userData, data1 } = authSlice.actions


export default authSlice.reducer

