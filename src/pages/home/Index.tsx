import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import style from './index.module.css'
import { Filter } from "../../components/filterCar/Filter";
import { Search } from "../../components/searchCar/Search";
import { fetchAddFavoriteCars, fetchGetCars } from "../../redux/createActions/carActions";
import { CarCard } from "../../components/carCard/CarCard";


export const Home: FC = () => {

    const dispatch = useAppDispatch();

    const { cars } = useAppSelector(state => state.cars)


    const addFavoriteCar = (id: number) => {
        dispatch(fetchAddFavoriteCars(id))
    }

    interface SelectOptionsProps {
        id:number
        param:string
    }
    const selectOptions= [
        {id:1,param:'Сначала в наличии'},
        {id:2,param:'По имени (A-Z)'},
        {id:3,param:'По имени (Z-A)'},
        {id:4,param:'Сначала новее'},
        {id:5,param:'Сначала старше'},
        {id:6,param:'Сначала дешевле'},
        {id:7,param:'Сначала дороже'}
    ]

    useEffect(() => {
        dispatch(fetchGetCars())
        dispatch(setSortItem(selectOptions[0].param)
        )
    }, [])

    


    return (
        <div>
            <div className={style.index_box}>
                <Filter selectOptions={selectOptions} />
                <Search />
            </div>
            <div>
                <CarCard cars={cars}
                    callBack={addFavoriteCar}
                    imageName="BTN_ADD"
                />
            </div>

        </div>

    );
};
