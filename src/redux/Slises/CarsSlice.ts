import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { fetchGetCars } from '../queryAsync/asyncCars'



  export interface car{
    id:number
    brand:string
    model:string
    color:string
    model_year:number
    img_src: string
    price:number
   
}


interface carArr{
    cars:car[]
}

const initialState:carArr = {
    cars:[]
}

const carsSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.
        addCase(fetchGetCars.fulfilled,(state,actions:PayloadAction<car[]>)=>{
            state.cars = actions.payload
        })
    }
    
})

export default carsSlice.reducer