import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  /* height: 100vh; */
  box-sizing: border-box;
`;
const VerticalVector = styled.div<{ $left?: number; $right?: number }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(66, 86, 122, 0.1);
  left: ${(props) => props.$left}px;
  right: ${(props) => props.$right}px;
`;
const HorizontalVector = styled.div`
  position: absolute;
  top: 480px;
  left: 320px;
  height: 1px;
  width: 1440px;
  background-color: rgba(66, 86, 122, 0.1);
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <VerticalVector $left={320} />
      <VerticalVector $left={1040} />
      <VerticalVector $right={160} />
      <HorizontalVector />
      {children}
    </Container>
  );
};
