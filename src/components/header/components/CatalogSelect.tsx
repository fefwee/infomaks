import { FC } from "react";
import catalog from '../../../../public/images/Catalog.png'
import logo from '../../../../public/images/logo.png'
import style from './style.module.css'

export const Catalog: FC = () => {
    return (
        <div className={style.catalog_select}>
            <img src={logo} alt="logo"/>
            <img src={catalog} alt="btn-catalog" />
        </div>
    );
};
