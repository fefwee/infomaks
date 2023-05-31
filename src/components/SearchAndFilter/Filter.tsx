import { FC, useState } from "react";
import sort from '../../../public/images/Sort.png'
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import { fetchGetCars } from "../../redux/createActions/carActions";
import style from './searchFilter.module.css'

interface select {
    selectOptions: string[]
}

export const Filter: FC<select> = ({ selectOptions }) => {

    //open select 
    const [open, setIsOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const { sortItem } = useAppSelector(state => state.cars)


    const toggleSort = (): void => {
        setIsOpen(!open)
    }


    const changeOptions = (value: any) => {
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
                <p  onClick={() => toggleSort()}>
                    {sortItem }
                </p>
            </div>
            {open &&

                <div className={style.drop_box}>
                    <ul >
                        {selectOptions.map((options, index) => (
                            <li onClick={() => changeOptions(options)} key={index}>{options}</li>
                        )
                        )
                        }

                    </ul>
                </div>
            }
        </div>
    );
};
