import { configureStore } from '@reduxjs/toolkit'
import backgroundSlice from './slices/backgroundSlice'

export default configureStore({
  reducer: {
    background: backgroundSlice.reducer,
  },
})