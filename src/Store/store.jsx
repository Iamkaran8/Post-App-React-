import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Slices/CounterSlice'
import PostReducer from '../Slices/PostAddSlice'
import AuthorReducer from '../Slices/AuthorAddSlices'

export const store = configureStore({
    reducer:{
        counter : CounterReducer,
        posts : PostReducer,
        Author: AuthorReducer
    }
})