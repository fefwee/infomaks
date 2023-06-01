import { createAsyncThunk } from "@reduxjs/toolkit";
import { car, carFavorite } from "../createSlices/CarsSlice";

export const fetchGetCars = createAsyncThunk<
  car[],
  undefined,
  { rejectValue: string }>
  ("cars/fetchGetCars", async function (_, { rejectWithValue }) {
  try {
    const query = await fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
                        }`,
      }),
    });

    const response = await query.json();

    return response.data.cars;
  } catch (error) {
    return rejectWithValue("something wrong");
  }
});

/// search cars

export const fetchSearchCars = createAsyncThunk<
  car[],
  string,
  { rejectValue: string }>
  ("cars/fetchSearchCars", async function (search, { rejectWithValue }) {
  try {
    const query = await fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
                        }`,
      }),
    });
    const response = await query.json();

    return response.data.cars;
  } catch (error) {
    return rejectWithValue("something wrong");
  }
});

export const fetchAddFavoriteCars = createAsyncThunk<
  carFavorite[],
  number,
  { rejectValue: string }>
  ("filterCar/fetchAddFavoriteCars", async function (id, { rejectWithValue }) {
  try {
    const query = await fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `   query{
                        car(id:${id}){
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
                                 }`,
      }),
    });

    const response = await query.json();

    return response.data.car;
  } catch (error) {
    return rejectWithValue("something wrong");
  }
});
