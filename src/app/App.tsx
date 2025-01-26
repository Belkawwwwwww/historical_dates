import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import { Vector } from "../components/Vector";
import { TimeSegments } from "../pages/TimeIntervals";
import { Home } from "../pages/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Vector />
      <Home />
      <TimeSegments />
    </>
  );
};
export default App;
