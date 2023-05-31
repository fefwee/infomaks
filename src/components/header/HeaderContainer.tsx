import { FC } from "react";
import { Catalog } from "./components/CatalogSelect";
import { AdressAndNumbers } from "./components/AdressAndNumber";
import { Favorites } from "./components/Favorites";
import { Outlet } from "react-router-dom";
import style from './Header.module.css'

export const HeaderContainer: FC = () => {
    return (
        <>
        <header className={style.header}>
            <div>
                <Catalog />
            </div>
            <div className={style.adress_favorites}>
                <div className={style.adress}>
                <AdressAndNumbers />
                </div>
                <Favorites />                
            </div>
        </header>
        <Outlet/>
        </>
    );
};
