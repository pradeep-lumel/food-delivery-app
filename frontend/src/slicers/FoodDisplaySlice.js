import { createSlice } from "@reduxjs/toolkit";

export const foodDisplaySlice=createSlice({
    name:'foods',
    initialState:{
        activeFoodCategory:'Salad',
    },
    reducers:{
        setActiveFoodCategory:(state,action)=>{
            state.activeFoodCategory=action.payload
        }
    }
})

export const{setActiveFoodCategory}=foodDisplaySlice.actions;
export default foodDisplaySlice.reducer