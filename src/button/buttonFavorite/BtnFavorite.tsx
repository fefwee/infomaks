import { FC } from "react";
import style from './btnFavorite.module.css'

interface BtnFavoriteProps {
    callBack: (id: number) => void
    imageName?: string
    id: number
    disable: boolean
}



export const BtnFavorite: FC<BtnFavoriteProps> = ({ imageName, callBack, id, disable }) => {
    let btn = null
    if (imageName === 'BTN_ADD') {
        btn = <button className={disable ? style.favorite_icon : style.favorite_icon_disable}
            disabled={disable ? false : true}></button>
    }
    else if (imageName === 'BTN_DELETE') {
        btn = <button className={style.delete_btn} ></button>
    }
    return (
        <>
            <span
                onClick={() => callBack(id)}>
                {btn}
            </span>
        </>
    )
}