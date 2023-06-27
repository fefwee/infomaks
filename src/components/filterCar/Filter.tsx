import { FC, useState } from "react";
import sort from '../../../public/images/Sort.png'
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import {  setSortItem } from "../../redux/createSlices/CarsSlice";
import { fetchGetCars } from "../../redux/createActions/carActions";
import style from './filterCar.module.css'


interface SelectCar {
    selectOptions: SelectOptionsProps[]
}
interface SelectOptionsProps {
    id:number
    param:string
}

export const Filter: FC<SelectCar> = ({ selectOptions }) => {
    
   
    const [open, setIsOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const { sortItem } = useAppSelector(state => state.cars)


    const toggleSort = (): void => {
        setIsOpen(!open)
    }


    const changeOptions = (value:string) => {
        dispatch(setSortItem(value))
        setIsOpen(false)
        dispatch(fetchGetCars())
    }


    return (
        <div>
            <div className={style.filter_box}>
                <span>
                    <img src={sort} alt="sort" />
                </span>
                <p onClick={() => toggleSort()}>
                    {sortItem}
                </p>
            </div>
            {open &&

                <div className={style.drop_box}>
                    <ul >
                        {selectOptions.map((options) => (
                            <li onClick={() => changeOptions(options.param)} key={options.id}>{options.param}</li>
                        )
                        )
                        }

                    </ul>
                </div>
            }
        </div>
    );
};
