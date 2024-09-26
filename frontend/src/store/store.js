import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slicers/CounterSlice';
import foodDisplayReducer from '../slicers/FoodDisplaySlice';
import authSlice from '../slicers/authSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,  
    foodDisplay: foodDisplayReducer, 
    authentication:authSlice
  },
});
