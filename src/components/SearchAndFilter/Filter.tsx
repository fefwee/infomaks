import { FC, ReactElement, useState } from "react";
import sort from '../../../public/Sort.png'
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { fetchGetCars } from "../../redux/createActions/carActions";


const selectOptions: string[] = [
    'Сначала в наличии',
    'По имени (A-Z)',
    'По имени (Z-A)',
    'Сначала новее',
    'Сначала старше',
    'Сначала дешевле',
    'Сначала дороже']


export const Filter: FC = (): ReactElement => {

    const { cars} = useAppSelector(state => state.cars)
    const [open, setIsOpen] = useState<boolean>(false)
    const [options, setOptions] = useState<string>('')
    const dispatch = useAppDispatch()

  
    


















    const toggleSort = (): void => {
        setIsOpen(!open)
    }


    const changeOptions = (value: any) => {
        setOptions(value)
        setIsOpen(false)

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
                    {options}
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
