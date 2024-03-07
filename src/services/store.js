import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../pages/RegisterHome/registerSlice'
export default configureStore({
    reducer: {
        register: registerReducer
    }
})