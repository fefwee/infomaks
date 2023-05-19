import { Global } from "@emotion/react";
import { FC, ReactElement } from "react";
import { GLOBAL_STYLES } from "./styles/global.styles";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { CarsPlace } from "./components/CarsPlace/Index";
import { FilterAndSearchContainer } from "./components/SearchAndFilter";

const App: FC = ():ReactElement => {
  return (

    <div>
      <Global styles={GLOBAL_STYLES} />
      <div
        css={{
          padding: '17px 40px',
          borderBottom: '1px solid #D9D9D9'
        }}>
        <HeaderContainer />
      </div>
      <div
        css={{
          display: 'block',
          margin: '0px 40px',
        }} >
        <FilterAndSearchContainer />
      </div>
      <div>
        <CarsPlace />
      </div>

    </div>
  );
};

export default App;
