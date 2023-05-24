import { ReactElement, useEffect } from "react";
import { Filter } from "../SearchAndFilter/Filter";
import { Search } from "../SearchAndFilter/Search";
import { Car } from "../carPlace/Car";


export const Home = (): ReactElement => {
    return (
        <div>
            <div css = {{
                display:'flex',
                justifyContent:'space-between'
            }}>
                <Filter />
                <Search />
            </div>
            <div css = {{
                marginTop:'100px',
                zIndex:'0'
            }}  
            > 
            <Car />
            </div>
            
        </div>

    );
};


