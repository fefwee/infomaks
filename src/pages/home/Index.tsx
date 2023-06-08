import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import style from './index.module.css'
import { Filter } from "../../components/filterCar/Filter";
import { Search } from "../../components/searchCar/Search";
import { Car } from "../../components/carPlace/Car";


export const Home:FC = () => {

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
            <div className={style.index_box}>
                <Filter selectOptions={selectOptions} />
                <Search />
            </div>
            <div>
                <Car />
            </div>

        </div>

    );
};

