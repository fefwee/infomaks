import { FC } from "react";
import style from './carCard.module.css'
import { Button } from "../../button/Button";
import { Cars } from '../../redux/createSlices/CarsSlice'
import { BtnFavorite } from "../../button/buttonFavorite/BtnFavorite";



interface CardCarProps {
    callBack: (id: number) => void
    cars: Cars[]
    btnTitle?: string
    imageName: string
    description?: boolean
}

export const CarCard: FC<CardCarProps> = ({ cars, btnTitle, callBack, imageName, description }) => {
    return (
        <>

            <div className={description ? style.desc_text : style.car_box}>
                {cars.map((item) => {
                    return (
                        <div className={description ? style.desc_container : style.car_box_item} key={item.id} >
                            <div className={description && style.desc_item}>
                                <div>
                                    <img className={item.availability ? style.img_car
                                        : style.img_car_avaiability}
                                        src={`${process.env.REACT_APP_BASE_URL_IMG + item.img_src}`} alt="icon"
                                    />
                                </div>
                                <div>
                                    <div className={style.desc_marg}>
                                        {description ? <h2>{item.brand}{item.model}</h2> :
                                            <h3>{item.brand}{item.model}</h3>}
                                        {description &&
                                            <p className={style.desc}> {item.description}</p>
                                        }
                                        <span>Год:{item.model_year}</span>
                                        <span>Цвет:{item.color}</span>
                                        <h4>ОТ {item.price}</h4>
                                    </div>
                                    <div className={style.btn_pay}>
                                        {item.availability ?
                                            <Button disable={true} variant="default" title={btnTitle} /> :
                                            <Button disable={false} variant="disable" />}
                                        <BtnFavorite callBack={callBack} id={item.id} disable={item.availability}
                                            imageName={imageName} />
                                        {!item.availability &&
                                            <p className={style.availability_position}>Нет в наличии</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}