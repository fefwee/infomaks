import { FC } from "react";

export const AdressAndNumbers: FC = () => {
    return (
        <div>
            <div css = {{
                display:'flex'
            }}>
                <p>Москва, Волгоградский пр-кт, 43, стр 1</p>
                <p>+7 800 555 35 35</p>
            </div>
        </div>
    );
};
