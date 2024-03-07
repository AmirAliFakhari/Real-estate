import { createSlice } from '@reduxjs/toolkit'

const registerSlice = createSlice({
    name: "register",
    initialState: {
        step: 0
    },
    reducers: {
        handleNext: state => {
            console.log("salam")
            state.step += 1
        },

        handlePrev: state => {
            state.step -= 1
        }
    }
})

export const { handleNext, handlePrev } = registerSlice.actions

export default registerSlice.reducer