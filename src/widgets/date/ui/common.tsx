import React, { useEffect, useRef, useState } from "react"; // Импорт необходимых библиотек и хуков React
import { gsap } from "gsap"; // Импорт библиотеки GSAP для анимации

export const YearAnimator = () => {
  // Определение функционального компонента YearAnimator
  const [currentYear, setCurrentYear] = useState(1980); // Состояние для хранения текущего года
  const [isAnimating, setIsAnimating] = useState(false); // Состояние для отслеживания анимации
  const [direction, setDirection] = useState(1); // Состояние для направления изменения года (1 - вперед, -1 - назад)
  const yearRef = useRef<HTMLHeadingElement | null>(null); // Реф для ссылки на заголовок с текущим годом

  // Функция для анимации изменения года
  const animateYearChange = (newYear: number) => {
    // GSAP анимация изменения года
    gsap.fromTo(
      yearRef.current, // Элемент, который нужно анимировать (заголовок года)
      { scale: 1, opacity: 1 }, // Начальные параметры анимации
      {
        duration: 0.5, // Длительность анимации
        onComplete: () => {
          setCurrentYear(newYear); // Обновление текущего года после анимации
          // Вторая анимация для возврата заголовка к нормальному состоянию
          gsap.to(yearRef.current, { scale: 1, opacity: 1, duration: 0.5 });
        },
      }
    );
  };

  // Обработчик нажатия кнопки "Вперед"
  const handleNext = () => {
    if (currentYear < 2005) {
      // Проверка, чтобы не выходить за пределы максимального года
      setDirection(1); // Установка направления на "вперед"
      setIsAnimating(true); // Установка состояния анимации в true
    }
  };

  // Обработчик нажатия кнопки "Назад"
  const handlePrev = () => {
    if (currentYear > 1980) {
      // Проверка, чтобы не выходить за пределы минимального года
      setDirection(-1); // Установка направления на "назад"
      setIsAnimating(true); // Установка состояния анимации в true
    }
  };

  useEffect(() => {
    // Хук эффекта для обработки анимаций
    let animationTimeout: NodeJS.Timeout; // Переменная для хранения таймера

    if (isAnimating) {
      // Если анимация активна
      const newYear = currentYear + direction; // Расчет нового года на основе направления
      if (direction === 1 && newYear <= 2005) {
        // Если направление "вперед" и новый год не превышает 2005
        animateYearChange(newYear); // Запустить анимацию изменения года
      } else if (direction === -1 && newYear >= 1980) {
        // Если направление "назад" и новый год не меньше 1980
        animateYearChange(newYear); // Запустить анимацию изменения года
      } else {
        setIsAnimating(false); // Сброс состояния анимации, если пределы не соблюдены
      }
    }

    // Задержка между изменениями года
    if (isAnimating) {
      animationTimeout = setTimeout(() => {
        setIsAnimating(true); // Обновление состояния анимации
      }, 10); // Задержка в 10 мс
    }

    return () => clearTimeout(animationTimeout); // Очистка таймера при размонтировании компонента
  }, [isAnimating, currentYear, direction]); // Зависимости для хука effect

  return (
    <div>
      <h1 ref={yearRef} style={{ fontSize: "48px", textAlign: "center" }}>
        {currentYear} {/* Отображение текущего года */}
      </h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={currentYear <= 1980}>
          {" "}
          {/* Кнопка "Назад" */}
          Назад
        </button>
        <button onClick={handleNext} disabled={currentYear >= 2005}>
          {" "}
          {/* Кнопка "Вперед" */}
          Вперед
        </button>
      </div>
    </div>
  );
};
