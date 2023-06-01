import { FC} from "react";
import favoritesLogo from '../../../../public/images/Saved@2x.png'
import { Link } from "react-router-dom";
import style from './style.module.css'


export const Favorites: FC = () => {



    return (
        <Link to='favoriteCar' className={style.favorite_icon}>
            <div className={style.favorite_box}>
                <span>
                    <img src={favoritesLogo} alt="favorites" className={style.favorite_img} />
                </span>
                <p className={style.favorite_icon}>Избранное</p>
            </div>
        </Link>

    );
};
