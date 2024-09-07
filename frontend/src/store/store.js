import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slicers/CounterSlice';
import foodDisplayReducer from '../slicers/FoodDisplaySlice'; // Corrected import

export const store = configureStore({
  reducer: {
    counter: counterReducer,  
    foodDisplay: foodDisplayReducer, 
  },
});
