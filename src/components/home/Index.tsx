import { ReactElement, useEffect, useState } from "react";
import { Filter } from "../SearchAndFilter/Filter";
import { Search } from "../SearchAndFilter/Search";
import { Car } from "../carPlace/Car";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import { fetchGetCars } from "../../redux/createActions/carActions";


export const Home = (): ReactElement => {



   
    

    const dispatch = useAppDispatch();

    const selectOptions: string[] = [
        'Сначала в наличии',
        'По имени (A-Z)',
        'По имени (Z-A)',
        'Сначала новее',
        'Сначала старше',
        'Сначала дешевле',
        'Сначала дороже'
    ]
 
  useEffect(() => {
        dispatch(setSortItem(selectOptions[0]))


    },
        [dispatch])

    return (
        <div>
            <div css = {{
                display:'flex',
                justifyContent:'space-between'
            }}>
                <Filter selectOptions = {selectOptions} />
                <Search />
            </div>
            <div css = {{
                marginTop:'100px',
                zIndex:'0'
            }}  
            > 
            <Car />
            </div>
            
        </div>

    );
};


