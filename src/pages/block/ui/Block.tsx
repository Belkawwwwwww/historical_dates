import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";
import { EventsListContainer } from "../../../features/eventsList";
import { MainTitle } from "../../../widgets/title";
import { Layout } from "../../../shared/layouts";
import { timePeriodsData } from "../../../shared/constants/timePeriodsData";
import { ControlButton } from "../../../features/controlButton";
import { Dates } from "../../../widgets/date";
import { MainCircle } from "../../../features/circle/ui/Circle";
import { usePeriodNavigation } from "../../../features/block/hooks/usePeriodNavigation";

const CircleContainer = styled.div`
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

const Circle = styled.div`
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

const NumberButton = styled.div<{ $isActive: boolean; $isHovered: boolean }>`
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

export const Block: React.FC = () => {
  const totalPeriod = timePeriodsData.length;
  const [activePeriod, setActivePeriod] = useState(totalPeriod - 1);
  const [showEvents, setShowEvents] = useState(true);
  // const { activePeriod, handleNext, handlePrevious, setActivePeriod } =
  //   usePeriodNavigation(totalPeriod, setShowEvents);

  const handleAnimationComplete = () => {
    setShowEvents(true); // Показываем слайдер после завершения анимации
  };

  const handleNext = () => {
    if (activePeriod < totalPeriod - 1) {
      moveToIndex(activePeriod + 1); // Перемещаемся к следующему индексу
    }
  };

  const handlePrevious = () => {
    if (activePeriod > 0) {
      moveToIndex(activePeriod - 1); // Перемещаемся к предыдущему индексу
    }
  };

  // Функция для перемещения индикатора к выбранному индексу
  const moveToIndex = (index: number) => {
    const angleForZero = index * (360 / totalPeriod); // Это угол для текущей нажатой кнопки
    const targetAngle = angleForZero + 60; // Позиция для установки точки чуть выше
    setShowEvents(false); // Скрыть EventsList
    gsap.to(".circle", {
      rotation: -targetAngle,
      duration: 0.5,
      onComplete: () => {
        setActivePeriod(index); // Обновляем активный период
        handleAnimationComplete(); // Завершение анимации
      },
    });
  };

  const handlePeriodChange = (index: number) => {
    setActivePeriod(index);
  };

  return (
    <Layout>
      <MainTitle />
      <Dates dates={timePeriodsData[activePeriod].dates} />
      <MainCircle
        setShowEvents={setShowEvents}
        totalPeriod={totalPeriod}
        activePeriod={activePeriod}
        onPeriodChange={handlePeriodChange}
      />

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
