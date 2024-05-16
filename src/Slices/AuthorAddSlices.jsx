import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {
        id:1,
        name:"karan"
    },
    {
        id:2,
        name:"Pranav"
    },
    {
        id:3,
        name:"Prabha"
    },
]
const AuthorAddSlice = createSlice({
    name:'Author',
    initialState,
    reducers:{

    }
})

export default AuthorAddSlice.reducer;