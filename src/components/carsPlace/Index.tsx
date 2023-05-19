import { FC,useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { fetchGetCars } from "../../redux/queryAsync/asyncCars";
import { CarItem } from "./CarItem";

export const CarsPlace: FC = () => {

    const dispatch = useAppDispatch()

    

    useEffect(()=>{
        dispatch(fetchGetCars())
    },
    [])

    const cars = useAppSelector(state=>state.cars.cars)


    
    return (
        <div css = {{
            display:"grid",
            gridTemplateColumns:'1fr 1fr 1fr 1fr',
            
            
            
        }}>
            {cars.map(car=> <CarItem key={car.id} {...car}/>)}
        </div>
    );
};


