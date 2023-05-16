import {createSlice} from '@reduxjs/toolkit'



  export interface car{
    id:number
    brand:string
    model:string
    color:string
    model_year:number
    img_src: string
    price:number
    description:string
    availability:boolean
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
    }
})

export default carsSlice.reducer