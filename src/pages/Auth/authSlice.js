import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null
    },
    reducers: {
        userData: (state, action) => {
            state.data = action.payload
        }

    }
})

export const { userData } = authSlice.actions

export default authSlice.reducer

