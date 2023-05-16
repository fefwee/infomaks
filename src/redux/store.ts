import { configureStore } from "@reduxjs/toolkit";
import carsSlice  from "./Slises/CarsSlice";



const store  = configureStore({
    reducer:{
        cars:carsSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;