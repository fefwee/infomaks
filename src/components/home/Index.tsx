import { ReactElement, useEffect } from "react";
import { Filter } from "../SearchAndFilter/Filter";
import { Search } from "../SearchAndFilter/Search";
import { Car } from "../carPlace/Car";
import { useAppDispatch } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import style from './index.module.css'


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


