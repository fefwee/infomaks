import { FC, ReactElement, useState } from "react";
import sort from '../../../public/Sort.png'
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";
import { fetchGetCars } from "../../redux/createActions/carActions";

interface select {
    selectOptions: string[]
}

export const Filter: FC<select> = ({ selectOptions }): ReactElement => {

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
            <div css={{
                display: 'flex',
                position: 'relative'
            }}>
                <span
                    onClick={() => toggleSort()}
                    css={{
                        position: 'absolute',
                        marginLeft: '-12px'
                    }}><img src={sort} alt="sort" /></span>
                <p
                    css={{
                        cursor: 'pointer',
                        padding: '0 0 0 5px'
                    }}>
                    {sortItem}
                </p>
            </div>

            {open &&

                <div css={{
                    position: 'absolute',
                    background: '#fffff',
                }}>
                    <ul css={{
                        width: '206px',
                        backgroundColor: '#ffffff',
                        listStyle: 'none',
                        border: '1px solid #000000',
                        "li": {
                            width: '100%',
                            padding: '5px  0 0 5px',
                            cursor: 'pointer',
                            ":hover": {
                                backgroundColor: '#1E8FFF'
                            }
                        }
                    }}>
                        {selectOptions.map((options, index) => (
                            <li onClick={() => changeOptions(options)} key={index}>{options}</li>
                        ))}

                    </ul>
                </div>
            }
        </div>
    );
};
