// import React from "react";
// import styled from "styled-components";

// // Стили для кнопки
// const Button = styled.div<{ $isActive: boolean }>`
//   position: absolute;
//   width: 6px;
//   height: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   border: 1px solid rgba(48, 62, 88, 0.5);
//   /* color: black; */
//   cursor: pointer;
//   transition: transform 0.3s;
//   background-color: rgba(244, 245, 249, 1);

//   ${({ $isActive }) =>
//     $isActive &&
//     `
//     width: 56px;
//     height: 56px;
//   `}

//   & span {
//     font-size: 20px;
//     font-weight: 400;
//     color: #42567a;
//   }
// `;

// // Пропсы для NumberButton
// interface NumberButtonProps {
//   isActive: boolean;
//   onClick: () => void;
//   children?: React.ReactNode;
//   style?: React.CSSProperties;
// }

// // Основной компонент NumberButton
// const NumberButton: React.FC<NumberButtonProps> = ({
//   isActive,
//   onClick,
//   children,
//   style,
// }) => {
//   return (
//     <Button $isActive={isActive} onClick={onClick} style={style}>
//       {children}
//     </Button>
//   );
// };

// export default NumberButton;
