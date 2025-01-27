import React, { useState } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";
import { EventsListContainer } from "../../../features/eventsList";
import { MainTitle } from "../../../widgets/title";
import { Layout } from "../../../shared/layouts";
import { timePeriodsData } from "../../../shared/constants/timePeriodsData";
import { ControlButton } from "../../../features/controlButton";
import { Dates } from "../../../widgets/date";

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

export const Block: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(0);
  const totalPeriod = timePeriodsData.length;
  const [showEvents, setShowEvents] = useState(true);

  const calculatePosition = (index: number) => {
    const angle = (index / totalPeriod) * 2 * Math.PI; // Угол в радианах
    const radius = 265; // Радиус окружности
    const x = 50 + (radius * Math.cos(angle) * 100) / 530;
    const y = 50 + (radius * Math.sin(angle) * 100) / 530;
    return { x, y };
  };
  const handleAnimationComplete = () => {
    setShowEvents(true); // Показываем слайдер после завершения анимации
  };

  const handleNext = () => {
    if (activePeriod < totalPeriod - 1) {
      setShowEvents(false); // Скрываем слайдер
      gsap.to(".circle", {
        rotation: "-=360",
        duration: 0.5,
        onComplete: () => {
          setActivePeriod(activePeriod + 1);
          handleAnimationComplete(); // Завершение анимации
        },
      });
    }
  };

  const handlePrevious = () => {
    if (activePeriod > 0) {
      setShowEvents(false); // Скрыть EventsList
      gsap.to(".circle", {
        rotation: "-=360",
        duration: 0.5,
        onComplete: () => {
          setActivePeriod(activePeriod - 1);
          handleAnimationComplete();
        },
      });
    }
  };

  const handleNumberClick = (index: number) => {
    if (index !== activePeriod) {
      const angleForZero = index * (360 / totalPeriod); // Это угол для текущей нажатой кнопки
      const targetAngle = angleForZero + 90; // Позиция для установки точки чуть выше
      setShowEvents(false); // Скрыть EventsList
      gsap.to(".circle", {
        rotation: -targetAngle,
        duration: 0.5,
        onComplete: () => {
          setActivePeriod(index); // Обновляем активный период
          handleAnimationComplete();
        },
      });
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

      <EventsListContainer
        events={timePeriodsData[activePeriod].events}
        showEvents={showEvents}
      />
    </Layout>
  );
};
