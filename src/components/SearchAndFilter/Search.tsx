import {  ReactElement, useState} from "react";
import searchIcon from '../../../public/search-button.png'
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { fetchGetCars, fetchSearchCars } from "../../redux/createActions/carActions";

export const Search= ():ReactElement => {
    const dispatch = useAppDispatch();

    const [value,setValue] = useState<string>('')

    if(value.length == 0){
        dispatch(fetchGetCars())   
    }

    return (
        <div>
            <div
            
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '445px',
                    border: '1px solid #D9D9D9',
                    padding: '6px',
                    borderRadius: '5px'
                }}>
                <input type="text" placeholder="Найти авто"
               value={value}
               onChange={(e)=> setValue(e.target.value)}
            
                    css={{
                        display: 'flex',
                        flexGrow: '1',
                        border: 'none',
                        ":focus": {
                            outline: 'none'
                        },
                        color: '#000000',
                        fontSize: '14px'
                    }} />
                <button
                onClick={()=>dispatch(fetchSearchCars(value))}
                    css={{
                        backgroundImage: `url(${searchIcon})`,
                        width: '24px',
                        height: '24px',
                        border: 'none',
                        outline: 'none',
                        cursor:'pointer'
                    }}></button>

            </div>

        </div>
    );
};
