import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 400px;
  left: 230px;
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  color: #42567a;
  z-index: 0;
  width: 973px;
  display: flex;
  @media (max-width: 320px) {
    width: 273px;
    top: 163px;
    left: 20px;
    transform: none;
    font-size: 56px;
    line-height: 72.46px;
  }
`;
export const Date_1 = styled.div`
  margin-left: -12px;
  color: rgba(93, 95, 238);
  @media (max-width: 320px) {
    margin: 0;
  }
`;
export const Date_2 = styled.div`
  margin-left: 63px;
  color: rgba(238, 92, 167);
  @media (max-width: 320px) {
    margin-left: 27px;
  }
`;
