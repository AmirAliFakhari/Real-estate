import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'reg',
    initialState: {
        urlData: [],

    },
    reducers: {
        urlData: (state, action) => {
            state.userRole = action.payload
        },
    }
})

export const { urlData } = authSlice.actions


export default authSlice.reducer

