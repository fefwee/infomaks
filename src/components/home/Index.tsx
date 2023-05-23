import { ReactElement, useEffect } from "react";
import { Filter } from "../SearchAndFilter/Filter";
import { Search } from "../SearchAndFilter/Search";
import { Car } from "../carPlace/Car";


export const Home = (): ReactElement => {







    return (
        <div>
            <div>
                <Filter />
                <Search />
            </div>
            <div > 
            <Car />
            </div>
            
        </div>

    );
};


