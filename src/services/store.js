import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../pages/Auth/authSlice'
export default configureStore({
    reducer: {
        auth: authSlice
    }
})