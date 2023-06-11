import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import style from './index.module.css'
import { Filter } from "../../components/filterCar/Filter";
import { Search } from "../../components/searchCar/Search";
import { Car } from "../../components/carPlace/Car";
import { fetchAddFavoriteCars, fetchGetCars } from "../../redux/createActions/carActions";


export const Home: FC = () => {

    const dispatch = useAppDispatch();

    const { cars } = useAppSelector(state => state.cars)


    const addFavoriteCar = (id: number) => {
        dispatch(fetchAddFavoriteCars(id))
    }

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
        dispatch(fetchGetCars())
        dispatch(setSortItem(selectOptions[0]))
    },[])


    return (
        <div>
            <div className={style.index_box}>
                <Filter selectOptions={selectOptions} />
                <Search />
            </div>
            <div>
                <Car addFavorite={addFavoriteCar} cars={cars} />
            </div>

        </div>

    );
};
