import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Swiper as SwiperClass } from "swiper";
import { Props } from "../type";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import {
  Container,
  Description,
  EventItem,
  NextButton,
  PrevButton,
  Year,
} from "../style";

export const EventsList: React.FC<Props> = ({ events }) => {
  const swiperRef = useRef<SwiperClass | null>(null); // Создаем реф для Swiper
  const [currentIndex, setCurrentIndex] = useState(0); // Состояние для индекса текущего слайда

  useEffect(() => {
    setCurrentIndex(0); // Сброс текущего индекса на 0
    swiperRef.current?.slideTo(0); // Перемещение слайдера к первому элементу
  }, [events]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentIndex(swiper.activeIndex); // Обновляем индекс текущего слайда
  };
  const LeftArrow = () => (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L1 11"
        stroke="#3877EE"
        strokeWidth="2"
        transform="rotate(179.79 4.45706 6)"
      />
    </svg>
  );

  const RightArrow = () => (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
    </svg>
  );
  return (
    <Container>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Сохраняем ссылку на Swiper
          setCurrentIndex(swiper.activeIndex);
        }}
        onSlideChange={handleSlideChange}
        slidesPerView={3}
        spaceBetween={80}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[
          FreeMode,
          // Navigation,
          // Pagination
        ]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventItem>
              <Year>{event.year}</Year>
              <Description>{event.description}</Description>
            </EventItem>
          </SwiperSlide>
        ))}
      </Swiper>
      {currentIndex > 0 && (
        <PrevButton onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrow />
        </PrevButton>
      )}
      {currentIndex < events.length - 3 && ( // 3 - количество видимых слайдов
        <NextButton onClick={() => swiperRef.current?.slideNext()}>
          <RightArrow />
        </NextButton>
      )}
    </Container>
  );
};
