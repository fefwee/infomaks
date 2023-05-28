import { ReactElement,useEffect,FC } from "react";
import icon_favorite from '../../../public/Saved@2x.png'
import { fetchAddFavoriteCars, fetchGetCars } from "../../redux/createActions/carActions";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setSortItem } from "../../redux/createSlices/CarsSlice";


export const Car= ():ReactElement => {

    const dispatch = useAppDispatch()

    const { cars} = useAppSelector(state => state.cars)
    

    const addFavoriteCar = (id:number) =>{
            dispatch(fetchAddFavoriteCars(id))
    }
    
    return (
        <div css={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr 1fr',
            marginTop:'200px',
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
                            <span 
                            onClick={()=>addFavoriteCar(item.id)}>
                            <img src={icon_favorite} alt="favorite" />
                            </span>
                         
                        </div>
                    </div>
                )
            })
            }


        </div>

    );
};
