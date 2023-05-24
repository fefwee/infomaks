import { ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "../../hook/hook"
import { removeCar } from "../../redux/createSlices/CarsSlice"


export const CarItem = (): ReactElement => {

    const { filterCar, success } = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    const remove:any = (id:number)=>{
        dispatch(removeCar(id))
    }
    
     
     

    
    
    
    return (
        <>
         <div>
            <h1>Избранные товары</h1>
         </div>
        
        {filterCar.map(item=>{
            return (
                <div key={item.id}>
                    <div><img src={`http://localhost:4000${item.img_src}`} alt="car" /></div>
                    <div>
                        <h2>{item.model}</h2>
                        <h3>{item.brand}</h3>
                        <p>{item.description}</p>
                        <p>{item.model_year}</p>
                        <p>{item.color}</p>
                        <h2>{item.price}</h2>
                        <button>Выбрать комплектацию</button>
                        <button onClick={()=>remove(item.id)}>Удалить</button>
                    </div>
                </div>
            )
           
        })}
        
        </>

    )
            }