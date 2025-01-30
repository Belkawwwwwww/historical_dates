import styled from "styled-components";

export const EventsListWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
  @media (max-width: 320px) {
    transform: none;
    margin-top: 313px;
    margin-left: 20px;
  }
`;
export const Container = styled.div`
  margin-left: 80px;
  margin-top: 42px;
  width: 1270px;
  position: relative;
  @media (max-width: 320px) {
    margin: 0;
    width: 732px;
  }
`;

export const EventItem = styled.div`
  height: 135px;

  @media (max-width: 320px) {
    height: auto;
    width: 166px;
    margin-left: 0;
  }
`;

export const Year = styled.div`
  color: rgba(56, 119, 238, 1);
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  font-family: "Bebas Neue";
  margin-bottom: 15px;
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

export const Description = styled.div`
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: rgba(66, 86, 122, 1);
  @media (max-width: 320px) {
    font-size: 16px;
    line-height: 20.3px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  top: calc(41px + (100% - 40px - 54px) / 2);
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
  cursor: pointer;
  @media (max-width: 320px) {
    display: none;
  }
`;

export const NextButton = styled(Button)`
  right: -44px;
`;

export const PrevButton = styled(Button)`
  left: -65px;
`;
