import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { fetchGetCars,fetchSearchCars } from '../createActions/carActions'



  export interface cars{
    id:number
    brand:string
    model:string
    color:string
    model_year:number
    img_src: string
    price:number
    availability:boolean
   
}
export interface car {
    id:number
    brand:string
    model:string
    color:string
    model_year:number
    img_src: string
    price:number
    availability:boolean
    description:string

}

export interface carArr{
    cars:cars[],
    error:boolean | null,
    success:boolean |null,
    searchModel:string


   

}

const initialState:carArr = {
    cars:[],
    error:null,
    success:null,
    searchModel:''



}


const carsSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{ 
       reset:(state)=>{
        state.success = false
        state.error = false
       },
       setSearchModel(state,actions){
        state.searchModel = actions.payload
       } 
    },
    extraReducers:(builder)=>{
        builder.
        addCase(fetchGetCars.pending,(state)=>{

        })
        .addCase(fetchGetCars.fulfilled,(state,actions)=>{
            state.cars = actions.payload
            state.success = true;
        })
        .addCase(fetchGetCars.rejected,(state)=>{
            state.cars = []
        })
        .addCase(fetchSearchCars.fulfilled,(state,action:PayloadAction<car[]>)=>{
            state.cars = action.payload
        })
        .addCase(fetchSearchCars.rejected,(state)=>{
            state.cars = []
        })
    }
    
})

export default carsSlice.reducer
export const {reset,setSearchModel} = carsSlice.actions 