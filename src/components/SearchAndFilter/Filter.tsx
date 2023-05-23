import { FC, ReactElement, useState } from "react";
import sort from '../../../public/Sort.png'


const selectOptions:string[] = ['Сначала в наличии',
    'По имени (A-Z)',
    'По имени (Z-A)',
    'Сначала новее',
    'Сначала старше',
    'Сначала дешевле',
    'Сначала дороже']


export const Filter: FC = (): ReactElement => {


    const [open, setIsOpen] = useState<boolean>(false)
    const [options, setOptions] = useState<null>(null)



    const toggleSort = ():void => {
        setIsOpen(!open)
    }


    const changeOptions = (value:any):void => {
        setOptions(value)
        setIsOpen(false)

    }


    return (
        <div>
            <div css={{
                display: 'flex',
                position: 'relative'
            }}>
                <span css = {{
                    position:'absolute',
                    marginLeft:'-12px'
                }}><img src={sort} alt="sort" /></span>
                <p onClick={() => toggleSort()}
                css = {{
                    cursor:'pointer',
                    padding:'0 0 0 5px'
                }}>
                    {options || selectOptions[0]}
                </p>
            </div>

            {open &&

                <div css={{
                    position: 'absolute',
                    background: '#fffff',
                }}>
                    <ul css={{
                        width: '206px',
                        backgroundColor: '#ffffff',
                        listStyle: 'none',
                        border: '1px solid #000000',
                        "li": {
                            width: '100%',
                            padding: '5px  0 0 5px',
                            cursor: 'pointer',
                            ":hover": {
                                backgroundColor: '#1E8FFF'
                            }
                        }
                    }}>
                        {selectOptions.map(options => (
                            <li  onClick={() => changeOptions(options)}>{options}</li>
                        ))}

                    </ul>
                </div>
            }
        </div>
    );
};
