import styled from "styled-components";

export const ControlContainer = styled.div`
  margin-top: 393px;
  margin-left: 80px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  @media (max-width: 320px) {
    margin-left: 20px;
    margin-top: 0px;
  }
`;
export const SelectedPeriod = styled.div`
  color: #42567a;
  font-weight: 400;
  font-size: 14px;
  font-family: "PT Sans";
  line-height: 18.12px;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    margin-bottom: 10.67px;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
`;
export const Button = styled.button<{ $isActive: boolean }>`
  border: 1px solid rgba(66, 86, 122, 0.5);
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  background: transparent;
  justify-content: center;
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 20px;
    @media (max-width: 320px) {
      margin-left: 8.33px;
    }
  }
  @media (max-width: 320px) {
    width: 25px;
    height: 25px;
    svg {
      width: 10px;
      height: 7px;
    }
  }

  ${({ $isActive }) =>
    $isActive
      ? `
    opacity: 50%
  `
      : ""}
`;
