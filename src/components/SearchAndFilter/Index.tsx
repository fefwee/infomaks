import { FC, useState } from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";

export const FilterAndSearchContainer: FC = () => {




    return (
        <div css={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '26px 0',
            border: '1px solid red'
        }}>
            <Filter/>
            <Search />
        </div>
    );
};
