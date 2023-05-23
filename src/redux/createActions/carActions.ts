import {  createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit"
import { car } from "../createSlices/CarsSlice"



export const fetchGetCars = createAsyncThunk<car[],undefined,{rejectValue:string} >(
    'cars/fetchGetCars',
    async function (_,{rejectWithValue}) {
        const query = await fetch('http://localhost:4000/api',{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body:JSON.stringify({
                query: `{
                    cars{
                      id
                      brand
                      model
                      color
                      model_year
                      img_src
                      price
                      availability
                      description
                    }
                }`
            })
        })

        if(!query.ok){
            return rejectWithValue('something wrong')
        }
        const response  = await query.json();

        return response.data.cars
        
    }
)


/// search cars 

export const fetchSearchCars = createAsyncThunk<car[],string,{rejectValue:string} >(
    'cars/fetchSearchCars',
    async function (search,{rejectWithValue}) {
        const query = await fetch('http://localhost:4000/api',{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body:JSON.stringify({
                query: `{
                    cars(search:"${search}"){
                        id
                        brand
                        model
                        color
                        model_year
                        img_src
                        price
                        description
                        availability
                    }
                }`
            })
        })

        if(!query.ok){
            return rejectWithValue('something wrong')
        }
        const response  = await query.json();

        return response.data.cars
        
    }
)
    
