import React, { useState } from "react";
import { gsap } from "gsap";
import { Circle, CircleContainer, NumberButton } from "../style";
import { Props } from "../type";

export const MainCircle: React.FC<Props> = ({
  totalPeriod,
  activePeriod,
  onPeriodChange,
}) => {
  const [showEvents, setShowEvents] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const calculatePosition = (index: number) => {
    const angle = (index / totalPeriod) * 2 * Math.PI;
    const radius = 265;
    const x = 50 + (radius * Math.cos(angle) * 100) / 530;
    const y = 50 + (radius * Math.sin(angle) * 100) / 530;
    return { x, y };
  };
  const moveToIndex = (index: number) => {
    const angleForZero = index * (360 / totalPeriod);
    const targetAngle = angleForZero + 60;
    setShowEvents(false);
    gsap.to(".circle", {
      rotation: -targetAngle,
      duration: 0.5,
      onComplete: () => {
        onPeriodChange(index);
        setShowEvents(true); // Завершение анимации
      },
    });
  };
  const handleNumberClick = (index: number) => {
    if (index !== activePeriod) {
      moveToIndex(index); // Используем общую функцию для перемещения
    }
  };

  return (
    <CircleContainer>
      <Circle className="circle">
        {Array.from({ length: totalPeriod }, (_, index) => {
          const { x, y } = calculatePosition(index);
          const isHovered = hoveredIndex === index;
          return (
            <NumberButton
              key={index}
              $isActive={activePeriod === index}
              $isHovered={hoveredIndex === index}
              className={`number ${activePeriod === index ? "active" : ""}`}
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%)`,
              }}
              onClick={() => handleNumberClick(index)}
              onMouseEnter={() => setHoveredIndex(index)} // Обработка наведения
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {(activePeriod === index || isHovered) && (
                <span>{index + 1}</span>
              )}
            </NumberButton>
          );
        })}
      </Circle>
    </CircleContainer>
  );
};
