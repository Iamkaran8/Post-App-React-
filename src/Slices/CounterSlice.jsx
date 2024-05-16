import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Count:0
}
export const CounterSlice = createSlice({
    name:'counter' ,
    initialState,
    reducers:{
        increment : (state)=>{
            state.Count += 1;
           
        },
        
    }

})

export const  {increment}= CounterSlice.actions; 
export default CounterSlice.reducer;