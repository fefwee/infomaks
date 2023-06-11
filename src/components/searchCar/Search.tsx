import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hook/hook";
import { fetchGetCars, fetchSearchCars } from "../../redux/createActions/carActions";
import style from './searchCar.module.css'

export const Search: FC = () => {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState<string>('')
/* 
    if (value.length == 0) {
        useEffect(()=>{
            dispatch(fetchGetCars())
        },[])   
     
    
    } */

    return (
        <div>
            <div className={style.search_box}>
                <input type="text" placeholder="Найти авто"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    onClick={() => dispatch(fetchSearchCars(value))}>
                </button>
            </div>
        </div>
    );
};
