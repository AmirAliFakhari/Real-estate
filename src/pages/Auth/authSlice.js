import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userRole: null
    },
    reducers: {
        userRole: (state, action) => {
            state.userRole = action.payload
        }

    }
})

export const { userRole } = authSlice.actions

export default authSlice.reducer

