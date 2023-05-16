import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
import { car } from "../Slises/CarsSlice"


export const fetchGetCars = createAsyncThunk<car[],undefined,{rejectValue:string} >(
    'cars/etchGetCars',
    async function (_,{rejectWithValue}) {
        const query = await fetch('http://localhost:4000/api/')

        if(!query.ok){
            return rejectWithValue('something wrong')
        }
        const response  = await query.json();
        console.log(response)

        return response
        
    }
)