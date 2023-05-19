import { FC, ReactElement } from "react";
import icon_favorite from '../../../public/Saved@2x.png'


interface CarItemProps {
      id:number   
      brand:string
      model:string
      color:string
      model_year:number
      img_src: string
      price:number
}


//envirment variable

export const CarItem = (props:CarItemProps):ReactElement => {

    const {id,brand,color,img_src,model,model_year,price} = props;
    return (
       
            <div css={{
                width: '300px',
                height: '360px',
                marginRight:'10px'
                
            }}>
                <div>
                <img src={`http://localhost:4000${img_src}`} alt="icon"
                    css={{
                        border: '1px solid #D9D9D9',
                        maxWidth: '280px',
                        maxHeight: '220px',
                        borderRadius: '15px 15px 0px 0px',
                    }} />
                <h3>{brand}</h3>
                <h3>{model}</h3>
                <p><span>{model_year}</span><span>{color}</span><span></span></p>
                <h4>{price}</h4>
                <div>
                    <button>Pay</button>
                    <img src={icon_favorite} alt="favorite" />
                </div>
                </div>
            </div>
          

         
        
    );
};
