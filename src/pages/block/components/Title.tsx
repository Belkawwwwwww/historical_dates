import React from "react";
import styled from "styled-components";
const VectorTitle = styled.div`
  position: absolute;
  width: 5px;
  height: 120px;
  top: 177px;
  left: 322px;
  background: linear-gradient(to bottom, #3877ee, #ef5da8);
`;
const Title = styled.div`
  position: absolute;
  left: 400px;
  top: 170px;
  width: 353px;
  font-weight: 700;
  font-size: 56px;
  color: var(--color-text);
  font-family: "PT Sans";
  line-height: 67.2px;
`;
export const MainTitle: React.FC = () => {
  return (
    <>
      <>
        <VectorTitle />
        <Title>Исторические даты</Title>
      </>
    </>
  );
};
