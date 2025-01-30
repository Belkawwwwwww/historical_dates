import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 320px;
  margin-right: 160px;
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  position: relative;
  flex-direction: column;
  &::before {
    content: "";
    height: 100%;
    width: 1px;
    background-color: rgba(66, 86, 122, 0.1);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    content: "";
    height: 1px;
    width: 100%;
    max-width: 1440px;
    background-color: rgba(66, 86, 122, 0.1);
    position: absolute;
    top: 480px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 320px) {
    margin: 0;
    border-right: none;
    border-left: none;
    &::before {
      display: none;
    }
    &::after {
      height: 1px;
      width: 280px;
      top: 50%;
    }
  }
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
