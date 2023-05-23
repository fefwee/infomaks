import { FC } from "react";
import { Catalog } from "./CatalogSelect";
import { AdressAndNumbers } from "./AdressAndNumber";
import { Favorites } from "./Favorites";
import { Outlet } from "react-router-dom";

export const HeaderContainer: FC = () => {
    return (
        <>
        <header css = {{
            display:'flex',
            justifyContent:'space-between',
        }}>
            <div>
                <Catalog />
            </div>
            <div css = {{
                display:'flex',
                alignItems:'center',
            }}>
                <div css = {{
                    marginRight:'136px'
                }}>
                <AdressAndNumbers />
                </div>
               
                <Favorites />
            </div>
        </header>
        <Outlet/>
        </>
    );
};
