import {FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hook/hook"
import { removeCar } from "../../redux/createSlices/CarsSlice"
import style from './favoriteCar.module.css'



export const CarItem:FC = () => {

    const { filterCar } = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    const remove = (id: number) => {
        dispatch(removeCar(id))
    }

    return (
        <>
            <div>
                <h1>Избранные товары - {filterCar.length} позиций</h1>
            </div>

            {filterCar.map(item => {
                return (
                    <div key={item.id} className={style.favcar_box} >
                        <img src={`${process.env.REACT_APP_BASE_URL_IMG + item.img_src}`} alt="car" />

                        < div className={style.desc_block}>
                            <h2>{item.model} {item.brand}</h2>
                            <p>{item.description}</p>
                            <p>{item.model_year}</p>
                            <p>{item.color}</p>
                            <h3>{item.price}</h3>
                            <div className={style.btn_block}>
                                <button>Выбрать комплектацию</button>
                                <button className={style.delete_btn} onClick={() => remove(item.id)}></button>
                            </div>
                        </div>
                    </div>
                )

            })}

        </>

    )
}