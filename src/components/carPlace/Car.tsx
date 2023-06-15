import { FC } from "react";
import icon_favorite from '../../../public/images/favoriteIcon.png'
import style from './Car.module.css'
import { Cars } from "../../redux/createSlices/CarsSlice";
import { Button } from "../../button/Button";



interface CarProps {
    cars: Cars[]
    addFavorite: (id: number) => void
}

export const Car: FC<CarProps> = ({ cars, addFavorite }) => {

    return (
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
                                    <Button disable={true} variant="default" /> :
                                    <Button disable={false} variant="disable" />}
                                <span
                                    onClick={() => addFavorite(item.id)}>
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

    );
};