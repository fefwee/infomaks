import { FC, ReactElement } from "react";
import favoritesLogo from '../../../../public/images/Saved@2x.png'
import { Link } from "react-router-dom";
import style from './style.module.css'


export const Favorites: FC = (): ReactElement => {



    return (


        <Link to='favoriteCar'>
            <div className={style.favorite_box}>
                <span>
                    <img src={favoritesLogo} alt="favorites" className={style.favorite_img} />
                </span>
                <p>Избранное</p>
            </div>
        </Link>

    );
};
