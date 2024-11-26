import {combineReducers} from '@reduxjs/toolkit'
import AuthSlice from '../Slices/AuthSlice.js'
const rootReducers=combineReducers({
    auth:AuthSlice
})

export {rootReducers}