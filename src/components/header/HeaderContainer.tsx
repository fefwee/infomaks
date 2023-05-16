import { FC } from "react";
import { Catalog } from "./CatalogSelect";
import { AdressAndNumbers } from "./AdressAndNumber";
import { Favorites } from "./Favorites";

export const HeaderContainer: FC = () => {
    return (
        <div css = {{
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
        </div>
    );
};
