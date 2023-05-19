import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
import { car } from "../Slises/CarsSlice"



export const fetchGetCars = createAsyncThunk<car[],undefined,{rejectValue:string} >(
    'cars/etchGetCars',
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

