import { FC } from "react";
import searchIcon from '../../../public/search-button.png'

export const Search: FC = () => {
    return (
        <div>
            <form 
            css = {{
                display:'flex',
                alignItems:'center',
                width:'445px',
                border:'1px solid #D9D9D9',
                padding:'6px',
                borderRadius:'5px'
            }}>
                <input type="text" placeholder="Найти авто"
                css = {{
                    display:'flex',
                    flexGrow:'1',
                    border:'none',
                    ":focus":{
                        outline:'none'
                    },
                    color:'#D9D9D9',
                    fontSize:'14px'
                }}/>
                <button 
                css = {{
                    backgroundImage:`url(${searchIcon})`,
                    width:'24px',
                    height:'24px',
                    border:'none',
                    outline:'none'
                }}></button>
                
            </form>
            
        </div>
    );
};
