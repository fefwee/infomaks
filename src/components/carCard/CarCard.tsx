import { FC } from "react";
import style from './carCard.module.css'
import { Button } from "../../button/Button";
import icon_favorite from '../../../public/images/favoriteIcon.png'
import {Cars} from '../../redux/createSlices/CarsSlice'



interface CardCarProps {
    callBack:(id:number)=>void
    cars:Cars[]
    btnTitle?:string
}

export const CarCard:FC<CardCarProps> = ({cars,btnTitle,callBack}) => {
    return (
        <>
        <div className={style.car_box}>
            {cars.map((item) => {
                return (

                    <div className={style.car_box_item} key={item.id}>
                        <>
                            <img className={item.availability ? `${style.img_car}`
                                : `${style.img_car_avaiability}`}
                                src={`${process.env.REACT_APP_BASE_URL_IMG + item.img_src}`} alt="icon"
                            />
                            <h3>{item.brand}{item.model}</h3>
                            <div className={style.description}>
                                <span>Год:{item.model_year}</span>
                                <span>Цвет:{item.color}</span>
                            </div>
                            <h4>ОТ {item.price}</h4>
                            <div className={style.btn_pay}>
                                {item.availability ?
                                    <Button disable={true} variant="default"  title = {btnTitle}/> :
                                    <Button disable={false} variant="disable"/>}
                                <span
                                    onClick={() => callBack(item.id)}>
                                    <img className={style.favorite_icon} src={icon_favorite} alt="favorite" />
                                </span>
                                {!item.availability && <p className={style.availability_position}>Нет в наличии</p>}
                            </div>
                        </>
                    </div>
                )
            })
            }
        </div>
        </>
    )
}