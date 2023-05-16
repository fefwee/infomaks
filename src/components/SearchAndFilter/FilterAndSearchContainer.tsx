import { FC } from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";

export const FilterAndSearchContainer: FC = () => {
    return (
        <div css = {{
            display:'flex',
            justifyContent:'space-between',
            padding:'46px 0px 42px 0'
        }}>
            <Filter/>
            <Search/>
        </div>
    );
};
