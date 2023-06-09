import  { FC } from "react";
import style from './buttom.module.css'


interface ButtonProps {
    title?: string
    variant?: string
    disable?: boolean
}




export const Button: FC<ButtonProps> = ({ title = 'Купить', variant = 'default', disable = false }) => {

    return (
        <>
            <button disabled={disable} 
                className= {`${style.default_btn} ${style[variant]}`}>{title}</button>

        </>
    )
}