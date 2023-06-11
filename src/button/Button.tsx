import React, { FC } from "react";
import style from './buttom.module.css'


interface ButtonProps {
    title?: string
    variant?: string
    disable: boolean
}




export const Button: FC<ButtonProps> = ({ title = 'купить', variant = 'default', disable }) => {

    return (
        <>
            <button disabled={disable} 
                className= {`${style.default_btn} ${style[variant]}`}
                onClick={() => alert('well')}>{title}</button>

        </>
    )
}