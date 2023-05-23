import { configureStore } from "@reduxjs/toolkit";
import carsSlice  from "./createSlices/CarsSlice";



const store  = configureStore({
    reducer:{
        cars:carsSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
console.log(store.getState());
