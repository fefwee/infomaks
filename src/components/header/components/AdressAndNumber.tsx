import { FC } from "react";
import style from './style.module.css'

export const AdressAndNumbers: FC = () => {
    return (
        <div>
            <div className={style.adress_number}>
                <h4>Москва, Волгоградский пр-кт, 43, стр 1</h4>
                <h4>+7 800 555 35 35</h4>
            </div>
        </div>
    );
};
