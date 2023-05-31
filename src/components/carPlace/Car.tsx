import { FC } from "react";
import icon_favorite from '../../../public/images/favoriteIcon.png'
import avaiabilityIcon from '../../../public/images/avaibilityBtn.png'
import { fetchAddFavoriteCars } from "../../redux/createActions/carActions";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import style from './Car.module.css'


export const Car: FC = () => {

    const dispatch = useAppDispatch()

    const { cars } = useAppSelector(state => state.cars)


    const addFavoriteCar = (id: number) => {
        dispatch(fetchAddFavoriteCars(id))
    }
    console.log(import.meta.env.VITE_REACT_APP_BASE_URL_IMG);


    return (
        <div className={style.car_box}>
            {cars.map((item) => {
                return (

                    <div className={style.car_box_item} key={item.id}>
                        {item.availability ?
                            <>
                                <img className={style.img_car}
                                    src={`${process.env.REACT_APP_BASE_URL_IMG + item.img_src}`} alt="icon" />
                                <h3>{item.brand}{item.model}</h3>
                                <div className={style.description}>
                                    <span>Год:{item.model_year}</span>
                                    <span>Цвет:{item.color}</span>
                                </div>
                                <h4>ОТ {item.price}</h4>
                                <div className={style.btn_pay}>
                                    <button>Купить</button>
                                    <span
                                        onClick={() => addFavoriteCar(item.id)}>
                                        <img className={style.favorite_icon} src={icon_favorite} alt="favorite" />
                                    </span>

                                </div>
                            </>

                            :
                            <>
                                <img className={`${style.img_car_avaiability} ${style.img_car}`} src={`${process.env.REACT_APP_BASE_URL_IMG + item.img_src}`} alt="icon"
                                />
                                <p className={style.availability_position}>Нет в наличии</p>
                                <h3>{item.brand}{item.model}</h3>
                                <div className={style.description}>
                                    <span>Год:{item.model_year}</span>
                                    <span>Цвет:{item.color}</span>
                                </div>
                                <h4>ОТ {item.price}</h4>
                                <div className={style.btn_pay}>
                                    <button className={style.availability_btn}>Купить</button>
                                    <span
                                        onClick={() => addFavoriteCar(item.id)}>
                                        <img className={style.favorite_icon} src={avaiabilityIcon} alt="favorite" />
                                    </span>

                                </div>

                            </>

                        }


                    </div>
                )
            })
            }


        </div>

    );
};
