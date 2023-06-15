import { FC } from "react";
import icon_favorite from '../../../public/images/favoriteIcon.png'
import icon_favorite_disable from '../../../public/images/avaibilityBtn.png'
import style from './btnFavorite.module.css'

interface BtnFavoriteProps {
    callBack: (id: number) => void
    variant: string
    id: number
}

export const BtnFavorite: FC<BtnFavoriteProps> = ({ callBack, variant, id }) => {
    return (
        <>
            <span
                onClick={() => callBack(id)}>
                {variant ?
                <img className={style.favorite_icon} src={icon_favorite} alt="favorite" />:
                <img className={style.favorite_icon_disable} src={icon_favorite_disable} alt="favorite" />
                }
            </span>
        </>
    )
}