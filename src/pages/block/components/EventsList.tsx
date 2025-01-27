import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";

type Event = {
  year: number;
  description: string;
};

type Props = {
  events: Event[];
};
const Container = styled.div`
  margin-left: 404px;
  margin-top: 56px;
  width: 1120px;
`;

const EventItem = styled.div`
  height: 135px;
  width: 320px;
  &:last-child {
  }
`;
const Year = styled.div`
  color: rgba(56, 119, 238, 1);
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  font-family: "Bebas Neue";
  margin-bottom: 15px;
`;
const Description = styled.div`
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: rgba(66, 86, 122, 1);
`;

export const EventsList: React.FC<Props> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Плавное исчезновение контейнера
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // После исчезновения, обновляем содержимое
          // Здесь вы можете обновить содержимое контейнера, если это необходимо
          // Например, если вы хотите обновить состояние или что-то еще

          // Плавное появление контейнера
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }
  }, [events]);

  return (
    <Container>
      <Swiper
        spaceBetween={100} // Расстояние между слайдами
        slidesPerView={3.5} // 3 одновремен
        grabCursor={true}
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
    </Container>
  );
};
