import { useRef, useState } from "react";
import { gsap } from "gsap";

export const usePeriodNavigation = (
  totalPeriod: number,
  setShowEvents: (show: boolean) => void
) => {
  const [activePeriod, setActivePeriod] = useState(totalPeriod - 1);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const moveToIndex = (index: number) => {
    const angleForZero = index * (360 / totalPeriod); // Рассчитываем угол для целевого индекса
    const targetAngle = angleForZero + 60; // Установка точки выше
    setShowEvents(false); // Скрыть события

    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: -targetAngle,
        duration: 0.5,
        onComplete: () => {
          setActivePeriod(index); // Обновляем активный период
          setShowEvents(true); // Показываем события
        },
      });
    }
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

  return {
    activePeriod,
    handleNext,
    handlePrevious,
    setActivePeriod,
    circleRef,
    moveToIndex,
  }; // Возвращаем необходимые значения и методы
};
