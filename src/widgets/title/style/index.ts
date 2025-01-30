import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin-top: 170px;
  @media (max-width: 320px) {
    margin-top: 59px;
  }
`;
export const VectorTitle = styled.div`
  width: 5px;
  height: 120px;
  background: linear-gradient(to bottom, #3877ee, #ef5da8);
  @media (max-width: 320px) {
    display: none;
  }
`;
export const Title = styled.div`
  margin-top: -10px;
  margin-left: 78px;
  width: 353px;
  font-weight: 700;
  font-size: 56px;
  color: var(--color-text);
  font-family: "PT Sans";
  line-height: 67.2px;
  @media (max-width: 320px) {
    margin-top: 0px;
    margin-left: 20px;
    font-size: 24px;
    line-height: 24px;
    width: 123px;
  }
`;
