import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import { Block } from "../pages/block/ui/Block";

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
