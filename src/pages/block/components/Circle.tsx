import React, { useState } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";
const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NumberButton = styled.div<{ $isActive: boolean }>`
  position: absolute;
  width: 6px;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(48, 62, 88, 0.5);
  /* color: black; */
  cursor: pointer;
  transition: transform 0.3s;
  background-color: rgba(244, 245, 249, 1);

  ${({ $isActive }) =>
    $isActive &&
    `
    width: 56px;
    height: 56px; 
  `}

  & span {
    font-size: 20px;
    font-weight: 400;
    color: #42567a;
  }
`;

export const MainCircle: React.FC = ({}) => {
  const [activePeriod, setActivePeriod] = useState(0);
  const timePeriodsData = [
    {
      title: "1",
      events: ["Событие 1.1", "Событие 1.2", "Событие 1.3"],
      dates: "1998 2001",
    },
    {
      title: "2",
      events: ["Событие 2.1", "Событие 2.2"],
      dates: "2005 2013",
    },
    {
      title: "3",
      events: ["Событие 3.1", "Событие 3.2"],
      dates: "2015 2022",
    },
    {
      title: "3",
      events: ["Событие 3.1", "Событие 3.2"],
      dates: "2010 2015",
    },
    {
      title: "3",
      events: ["Событие 3.1", "Событие 3.2"],
      dates: "2010 2015",
    },
    {
      title: "3",
      events: ["Событие 3.1", "Событие 3.2"],
      dates: "2010 2015",
    },
  ];
  const calculatePosition = (index: number) => {
    const angle = (index / totalPeriod) * 2 * Math.PI; // Угол в радианах
    const radius = 265; // Радиус окружности
    const x = 50 + (radius * Math.cos(angle) * 100) / 530;
    const y = 50 + (radius * Math.sin(angle) * 100) / 530;
    return { x, y };
  };
  const totalPeriod = timePeriodsData.length;
  const handleNumberClick = (index: number) => {
    if (index !== activePeriod) {
      const angleForZero = index * (360 / totalPeriod); // Это угол для текущей нажатой кнопки
      const targetAngle = angleForZero + 90; // Позиция для установки точки чуть выше 1
      gsap.to(".circle", { rotation: -targetAngle, duration: 0.5 }); // Поворачиваем круг
      setActivePeriod(index); // Обновляем активный период
    }
  };
  return (
    <Circle className="circle">
      {Array.from({ length: totalPeriod }, (_, index) => {
        const { x, y } = calculatePosition(index);
        return (
          <NumberButton
            key={index}
            $isActive={activePeriod === index}
            className={`number ${activePeriod === index ? "active" : ""}`}
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: `translate(-50%, -50%)`,
            }}
            onClick={() => handleNumberClick(index)}
          >
            {activePeriod === index && <span>{index + 1}</span>}
          </NumberButton>
        );
      })}
    </Circle>
  );
};
