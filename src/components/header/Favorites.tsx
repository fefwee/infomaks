import { FC } from "react";
import favoritesLogo from '../../../public/Saved@2x.png'

export const Favorites: FC = () => {
    return (
        <div>
            <div css={{
                display: 'flex',
                alignItems:'center',
                justifyContent:'flex-end'
            }}>
                <span><img src={favoritesLogo} alt="favorites" 
                css = {{
                    width:'27px',
                    height:'24px',
                }}/></span>
                <p css = {{
                    marginLeft:'12px'
                }}>Избранное</p>
            </div>
        </div>
    );
};
