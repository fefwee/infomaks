import { FC, ReactElement } from "react";
import favoritesLogo from '../../../public/Saved@2x.png'
import { Link } from "react-router-dom";


export const Favorites= ():ReactElement => {


    
    return (

     
        <Link to='favoriteCar'>
            <div css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <span><img src={favoritesLogo} alt="favorites"
                    css={{
                        width: '27px',
                        height: '24px',
                    }} /></span>
                <p
                    css={{
                        marginLeft: '12px'
                    }}>Избранное</p>
            </div>
        </Link>
                
    );
};
