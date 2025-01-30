import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import { Block } from "../pages";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Block />
      <Block />
    </>
  );
};
export default App;
