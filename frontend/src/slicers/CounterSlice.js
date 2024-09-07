import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'count',
    initialState:{
        count:1
    },
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        }
    }
})

export const{increment,decrement}=counterSlice.actions
export default counterSlice.reducer