import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { MainTitle } from "../components/Title";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";
import { Dates } from "../components/DatesContainer";
import { EventsList } from "../components/EventsList";
import { ControlButton } from "../components/ControlButton";
import { timePeriodsData } from "../../../shared/constants/timePeriodsData";

const CircleContainer = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  top: 215px;
  left: 775px;
`;

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

// const ControlButton = styled.button`
//   border: 1px solid rgba(66, 86, 122, 0.5);
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   border-radius: 50%;
//   background: transparent;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   &:last-child {
//     margin-left: 20px;
//   }
//   &:hover {
//     background-color: white;
//   }
// `;

// const EventsList = styled.div`
//   margin-top: 20px;
//   width: 100%;
//   max-width: 600px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
// `;

const EventItem = styled.div`
  padding: 5px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const Block: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(0);
  const totalPeriod = timePeriodsData.length;

  const calculatePosition = (index: number) => {
    const angle = (index / totalPeriod) * 2 * Math.PI; // Угол в радианах
    const radius = 265; // Радиус окружности
    const x = 50 + (radius * Math.cos(angle) * 100) / 530;
    const y = 50 + (radius * Math.sin(angle) * 100) / 530;
    return { x, y };
  };

  const handleNext = () => {
    if (activePeriod < totalPeriod - 1) {
      gsap.to(".circle", { rotation: "-=360", duration: 0.5 });
      setActivePeriod(activePeriod + 1);
    }
  };

  const handlePrevious = () => {
    if (activePeriod > 0) {
      gsap.to(".circle", { rotation: "-=360", duration: 0.5 });
      setActivePeriod(activePeriod - 1);
    }
  };

  const handleNumberClick = (index: number) => {
    if (index !== activePeriod) {
      const angleForZero = index * (360 / totalPeriod); // Это угол для текущей нажатой кнопки
      const targetAngle = angleForZero + 90; // Позиция для установки точки чуть выше 1
      gsap.to(".circle", { rotation: -targetAngle, duration: 0.5 }); // Поворачиваем круг
      setActivePeriod(index); // Обновляем активный период
    }
  };

  return (
    <Layout>
      <MainTitle />
      <CircleContainer>
        <Dates dates={timePeriodsData[activePeriod].dates} />
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
      </CircleContainer>
      <ControlButton
        activePeriod={activePeriod}
        totalPeriod={totalPeriod}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <EventsList events={timePeriodsData[activePeriod].events} />
    </Layout>
  );
};
