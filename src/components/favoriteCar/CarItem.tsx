import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hook/hook"
import { removeCar } from "../../redux/createSlices/CarsSlice"
import { CarCard } from "../carCard/CarCard"
import style from './favoriteCar.module.css'



export const CarItem: FC = () => {

    const Name = 'Выбрать комлпектацию'

    const { filterCar } = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    const remove = (id: number) => {
        dispatch(removeCar(id))
    }

    return (
        <>
            <div>
                <h1 className={style.header_line}>Избранные товары - {filterCar.length} позиций</h1>
                <CarCard cars={filterCar}
                callBack={remove}
                imageName="BTN_DELETE"
                btnTitle={Name}
                description={true} />
            </div>

        </>

    )
}