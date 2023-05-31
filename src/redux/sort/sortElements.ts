import { cars } from "./../createSlices/CarsSlice";

export const filterArr = (state: any) => {
  const filter = state.cars.filter((item:any) => item.availability != false);
  return filter
};
