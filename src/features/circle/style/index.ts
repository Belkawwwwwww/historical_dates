import styled from "styled-components";

export const CircleContainer = styled.div`
  position: absolute;
  width: 530px;
  height: 530px;
  top: 215px;
  left: 452px;
  @media (max-width: 320px) {
    left: -142px;
    width: auto;
    height: auto;
    margin-top: 163px;
  }
`;

export const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 320px) {
    display: none;
  }
`;

export const NumberButton = styled.div<{
  $isActive: boolean;
  $isHovered: boolean;
}>`
  position: absolute;
  width: 6px;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(48, 62, 88, 0.5);
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
  background-color: rgba(66, 86, 122, 1);

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: rgba(244, 245, 249, 1);
    width: 56px;
    height: 56px; 
  `}
  ${({ $isHovered }) =>
    $isHovered &&
    `
    background-color: rgba(244, 245, 249, 1); // Цвет фона при наведении
    width: 56px; // Увеличиваем размер при наведении
    height: 56px; // Увеличиваем размер при наведении
  `}


  & span {
    font-size: 20px;
    font-weight: 400;
    color: #42567a;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
