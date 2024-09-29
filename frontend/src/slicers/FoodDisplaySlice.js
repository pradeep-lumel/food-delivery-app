import { createSlice } from "@reduxjs/toolkit";
//slicers for food details
export const foodDisplaySlice=createSlice({
    name:'foods',
    initialState:{
        activeFoodCategory:'',
        foodOrderedCount:{}
    },
    reducers:{
        setActiveFoodCategory:(state,action)=>{
            state.activeFoodCategory=action.payload
        },
        setFoodOrderedCount:(state,action)=>{
          const{foodName,count}=action.payload;
          if(state.foodOrderedCount[foodName])state.foodOrderedCount[foodName]+=count;
          else state.foodOrderedCount[foodName]=count
        }
    }
})

export const{setActiveFoodCategory,setFoodOrderedCount}=foodDisplaySlice.actions;
export default foodDisplaySlice.reducer
