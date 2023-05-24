import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAddFavoriteCars,
  fetchGetCars,
  fetchSearchCars,
} from "../createActions/carActions";

export interface cars {
  id: number;
  brand: string;
  model: string;
  color: string;
  model_year: number;
  img_src: string;
  price: number;
  availability: boolean;
}
export interface car {
  id: number;
  brand: string;
  model: string;
  color: string;
  model_year: number;
  img_src: string;
  price: number;
  availability: boolean;
  description: string;
}
export interface carFavorite {
  id: number;
  brand:string
  model:string
  color:string
  model_year:number
  img_src:string
  price:string
  description:string
  availability:true
}

export interface carArr {
  cars: cars[];
  error: boolean | null;
  success: boolean | null;
  filterCar:carFavorite[];
}

const initialState: carArr = {
  cars: [],
  error: null,
  success: null,
  filterCar: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    reset: (state) => {
      state.success = false;
      state.error = false;
    },
    removeCar:(state,actions:PayloadAction<number>)=>{
      const arrCars = state.filterCar.filter(item=> item.id !== actions.payload);
      state.filterCar = arrCars;
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCars.pending, (state) => {})
      .addCase(fetchGetCars.fulfilled, (state, actions:PayloadAction<cars[]>) => {
        state.cars = actions.payload;
        state.success = true;
      })
      .addCase(fetchGetCars.rejected, (state) => {
        state.cars = [];
      })
      .addCase(
        fetchSearchCars.fulfilled,
        (state, action: PayloadAction<cars[]>) => {
          state.cars = action.payload;
        }
      )
      .addCase(fetchSearchCars.rejected, (state) => {
        state.cars = [];
      })
      .addCase(
        fetchAddFavoriteCars.fulfilled,
        (state, actions: PayloadAction<any>) => {
          state.filterCar.push(actions.payload)
          state.success = true
        }
      );
  },
});

export default carsSlice.reducer;
export const { reset,removeCar } = carsSlice.actions;
