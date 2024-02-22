import { configureStore } from '@reduxjs/toolkit'
import pageSlice from './slices/allSciles'


export const store = configureStore({
   reducer: {
      pageSlice
   },
})
