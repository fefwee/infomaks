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
  brand: string;
  model: string;
  color: string;
  model_year: number;
  img_src: string;
  price: string;
  description: string;
  availability: true;
}

export interface carArr {
  cars: cars[];
  sortItem: string;
  success: boolean | null;
  filterCar: carFavorite[];
}

const initialState: carArr = {
  cars: [],
  sortItem:'',
  success: null,
  filterCar: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    reset: (state) => {
      state.success = false;
    },
    removeCar: (state, actions: PayloadAction<number>) => {
      const arrCars = state.filterCar.filter(
        (item) => item.id !== actions.payload
      );
      state.filterCar = arrCars;
    },
    setSortItem: (state, actions) => {
      state.sortItem = actions.payload;
      
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchGetCars.fulfilled,
        (state, actions: PayloadAction<cars[]>) => {

          state.cars = actions.payload;
          switch (state.sortItem) {
            case  'Сначала в наличии':
            const filter = state.cars.filter(item => item.availability != false)
            state.cars = filter;
            break
            case 'По имени (A-Z)':
            const filtername = state.cars
            break
            case  'Сначала новее':
              const filterYears = state.cars.sort((a,b) => a.model_year - b.model_year)
              state.cars = filterYears;
              break
              case 'Сначала дешевле':
            const filterPriceDown = state.cars.sort((a,b) => a.price - b.price)
            state.cars = filterPriceDown
            break
            case  'Сначала дороже':
              const filterPriceUp = state.cars.sort((a,b) => b.price - a.price)
              state.cars = filterPriceUp
          
            default:
              break;
          }
          state.success = true;
        }
      )
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
          state.filterCar.push(actions.payload);
          state.success = true;
        }
      );
  },
});

export default carsSlice.reducer;
export const { reset, removeCar, setSortItem } = carsSlice.actions;
