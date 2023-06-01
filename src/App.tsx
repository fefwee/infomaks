import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { FC} from "react";
import { GLOBAL_STYLES } from "./styles/global.styles";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { Home } from "./components/home/Index";
import { CarItem } from "./components/favoriteCar/CarItem";
import style from './styles/App.module.css'
const App: FC = () => {
  return (
    <div className={style.container}>
      <Global styles={GLOBAL_STYLES} />
        <Routes>
          <Route path="/" element={<HeaderContainer />}>
            <Route index element={<Home />} />
            <Route path="carItem" element={<CarItem />} />
            <Route path="favoriteCar" element={<CarItem />} />
          </Route>
        </Routes>
      </div>
  );
};

export default App;