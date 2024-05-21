import {configureStore} from '@reduxjs/toolkit'
import applicationSlice from './feature/applicationSlice'

export default configureStore({
  reducer: {
    applicationSlice
  }
})