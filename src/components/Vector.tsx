import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;
const VerticalVector = styled.div<{ $left: number }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(66, 86, 122, 0.1);
  left: ${(props) => props.$left}px;
`;
const HorizontalVector = styled.div`
  position: absolute;
  top: 480px;
  left: 320px;
  height: 1px;
  width: 1440px;
  background-color: rgba(66, 86, 122, 0.1);
`;

export const Vector: React.FC = () => {
  return (
    <Container>
      <VerticalVector $left={320} />
      <VerticalVector $left={1040} />
      <VerticalVector $left={1760} />
      <HorizontalVector />
    </Container>
  );
};
