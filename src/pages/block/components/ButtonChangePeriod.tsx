import gsap from "gsap";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../shared/button/ui/Button";
const Container = styled.div``;
interface EventPeriod {
  title: string;
  events: string[];
  dates: string;
}

type Props = {
  timePeriodsData: EventPeriod[];
};
export const ButtonChangePeriod: React.FC<Props> = ({ timePeriodsData }) => {
  const [activePeriod, setActivePeriod] = useState(0);
  const totalPeriod = timePeriodsData.length;

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

  return (
    <Container>
      <div>
        {activePeriod + 1}/{totalPeriod}
      </div>

      <Button
        onClick={handlePrevious}
        type="submit"
        disabled={activePeriod === 0}
      >
        Назад
      </Button>
      <Button
        onClick={handleNext}
        type="submit"
        disabled={activePeriod === totalPeriod - 1}
      >
        Вперед
      </Button>
    </Container>
  );
};
