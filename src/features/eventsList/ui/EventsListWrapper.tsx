import React, { useEffect, useRef } from "react";
import { EventsList } from "../components/EventsList";
import { gsap } from "gsap";
import { Props } from "../type";
import { EventsListWrapper } from "../style";

export const EventsListContainer: React.FC<Props> = ({
  events,
  showEvents,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (showEvents) {
        gsap.to(ref.current, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        });
      } else {
        gsap.to(ref.current, {
          opacity: 0,
          duration: 0.1,
          ease: "power2.in",
        });
      }
    }
  }, [showEvents]);

  return (
    <EventsListWrapper ref={ref}>
      <EventsList events={events} />
    </EventsListWrapper>
  );
};
