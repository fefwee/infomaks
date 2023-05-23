import { ReactElement, useState, useEffect } from "react";
import icon_favorite from '../../../public/Saved@2x.png'
import { fetchGetCars } from "../../redux/createActions/carActions";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { Link } from "react-router-dom";



//envirment variable

export const Car= ():ReactElement => {

    const dispatch = useAppDispatch()
    const { cars,searchModel } = useAppSelector(state => state.cars)

    useEffect(() => {
        dispatch(fetchGetCars())
    },
        [dispatch])

        


         /* const data = cars.filter(item=> item.brand.toLowerCase().includes(searchModel))  */

    return (
        <div css={{
            width: '300px',
            height: '360px',
            marginRight: '10px',
            position: 'relative'

        }}>
            {cars.map((item) => {
                return (

                    <div key={item.id}>
                        {item.availability ?

                            <img src={`http://localhost:4000${item.img_src}`} alt="icon"
                                css={{
                                    border: '1px solid #D9D9D9',
                                    maxWidth: '280px',
                                    maxHeight: '220px',
                                    borderRadius: '15px 15px 0px 0px',
                                }} />
                            :
                            <>
                                <img src={`http://localhost:4000${item.img_src}`} alt="icon"
                                    css={{
                                        border: '1px solid #D9D9D9',
                                        opacity: '0.3',
                                        width: '280px',
                                        MaxHeight: '220px',
                                        borderRadius: '15px 15px 0px 0px',
                                    }} />
                                {<p css={{
                                    padding: '10px 15px',
                                    backgroundColor: '#000000',
                                    color: 'white'
                                }}>Нет в наличии</p>}
                            </>
                        }

                        <h3>{item.brand} {item.model}</h3>
                        <p>Год:{item.model_year}</p>
                        <p>Цвет:{item.color}</p>
                        <h4>ОТ {item.price}</h4>
                        <div>
                            <button
                            css={{
                                width: '154px',
                                height: '36px',
                                backgroundColor: '#4F2CD9',
                                border: 'none',
                                borderRadius: '5px'
                            }}>Pay</button>
                            <img src={icon_favorite} alt="favorite" />
                        </div>
                    </div>
                )
            })
            }


        </div>

    );
};
