import { FC,useState } from "react";
import { useAppDispatch } from "../../hook/hook";
import { fetchSearchCars } from "../../redux/createActions/carActions";
import style from './searchCar.module.css'

export const Search: FC = () => {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState<string>('')

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
