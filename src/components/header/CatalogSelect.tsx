import { FC } from "react";
import catalog from '../../../public/Catalog.png'
import logo from '../../../public/logo.png'

export const Catalog: FC = () => {
    return (
        <div css = {{
            display:'flex',
            alignItems:'center'
        }}>
            <img src={logo} alt=""  css = {{
                marginRight:'21px'
            }}/>
            <img src={catalog} />
        </div>
    );
};
