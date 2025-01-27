import styled from "styled-components";

export const EventsListWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
`;
export const Container = styled.div`
  margin-left: 404px;
  margin-top: 56px;
  width: 1200px;
  position: relative;
`;

export const EventItem = styled.div`
  height: 135px;
  width: 320px;
`;

export const Year = styled.div`
  color: rgba(56, 119, 238, 1);
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  font-family: "Bebas Neue";
  margin-bottom: 15px;
`;

export const Description = styled.div`
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: rgba(66, 86, 122, 1);
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
`;

export const NextButton = styled(Button)`
  right: -80px;
`;

export const PrevButton = styled(Button)`
  left: -65px;
`;
