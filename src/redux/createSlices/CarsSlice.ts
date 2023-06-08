import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAddFavoriteCars,
  fetchGetCars,
  fetchSearchCars,
} from "../createActions/carActions";

export interface Cars {
  id: number;
  brand: string;
  model: string;
  color: string;
  model_year: number;
  img_src: string;
  price: string;
  availability: boolean;
}
/* export interface CarItem {
  id: number;
  brand: string;
  model: string;
  color: string;
  model_year: number;
  img_src: string;
  price: string;
  availability: boolean;
  description: string;
} */
export interface CarFavorite {
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

export interface CarArr {
  cars: Cars[];
  sortItem: string;
  filterCar: CarFavorite[];
}

const initialState: CarArr = {
  cars: [],
  sortItem: "",
  filterCar: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
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
        (state, actions: PayloadAction<Cars[]>) => {
          state.cars = actions.payload;
          switch (state.sortItem) {
            case "Сначала в наличии":
              const filter = state.cars.filter(
                (item) => item.availability != false
              );
              state.cars = filter;
              break;
            case "По имени (A-Z)":
              const filterName = state.cars.sort((a, b) =>
                a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1
              );
              state.cars = filterName;
              break;
            case "По имени (Z-A)":
              const filterNameReverse = state.cars.sort((a, b) =>
                a.brand.toLowerCase() < b.brand.toLowerCase() ? 1 : -1
              );
              state.cars = filterNameReverse;
              break;
            case "Сначала новее":
              const filterYearsDown = state.cars.sort(
                (a, b) => b.model_year - a.model_year
              );
              state.cars = filterYearsDown;
              break;
            case "Сначала старше":
              const filterYearsUp = state.cars.sort(
                (a, b) => a.model_year - b.model_year
              );
              state.cars = filterYearsUp;
              break;
            case "Сначала дешевле":
              const filterPriceDown = state.cars.sort(
                (a:any, b:any) =>
                  a.price.replace(/\D/g, "") - b.price.replace(/\D/g, "")
              );
              state.cars = filterPriceDown;
              break;
            case "Сначала дороже":
              const filterPriceUp = state.cars.sort(
                (a:any, b:any) =>
                  b.price.replace(/\D/g, "") - a.price.replace(/\D/g, "")
              );
              state.cars = filterPriceUp;

            default:
              state.cars = actions.payload;
              break;
          }
        }
      )
      .addCase(fetchGetCars.rejected, (state) => {
        state.cars = [];
      })
      .addCase(
        fetchSearchCars.fulfilled,
        (state, action: PayloadAction<Cars[]>) => {
          state.cars = action.payload;
        }
      )
      .addCase(fetchSearchCars.rejected, (state) => {
        state.cars = [];
      })
      .addCase(
        fetchAddFavoriteCars.fulfilled,
        (state, actions:PayloadAction<any>) => {
          state.filterCar.push(actions.payload);
        }
      );
  },
});

export default carsSlice.reducer;
export const { removeCar, setSortItem } = carsSlice.actions;
