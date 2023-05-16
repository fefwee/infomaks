import { FC } from "react";

export const CarItem: FC = () => {
    return (
        <div css = {{
            width:'445px',
            height:'498px'
        }}>
            <img src="" alt="" />
            <h3>name</h3>
            <p><span>year</span><span>color</span></p>
            <h4>price</h4>
            <div>
            <button>Pay</button>
            <img src="" alt="favorite" />
            </div>
            



        </div>
    );
};
