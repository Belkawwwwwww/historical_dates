import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

type Props = {
  activePeriod: number;
  totalPeriod: number;
  handleNext: () => void;
  handlePrevious: () => void;
};
const ControlContainer = styled.div`
  margin-top: 172px;
  margin-left: 404px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const SelectedPeriod = styled.div`
  color: #42567a;
  font-weight: 400;
  font-size: 14px;
  font-family: "PT Sans";
  line-height: 18.12px;
  margin-bottom: 20px;
`;
const ContainerButton = styled.div`
  display: flex;
`;
const Button = styled.button<{ $isActive: boolean }>`
  border: 1px solid rgba(66, 86, 122, 0.5);
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  background: transparent;
  justify-content: center;
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 20px;
  }
  ${({ $isActive }) =>
    $isActive
      ? `
    opacity: 50%
  `
      : ""}
`;

export const ControlButton: React.FC<Props> = ({
  activePeriod,
  totalPeriod,
  handleNext,
  handlePrevious,
}) => {
  const formattedActivePeriod = String(activePeriod + 1).padStart(2, "0");
  const formattedTotalPeriod = String(totalPeriod).padStart(2, "0");
  const handleMouseEnter = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "white",
      duration: 0.3,
    });
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "transparent",
      duration: 0.3,
    });
  };

  return (
    <ControlContainer>
      <SelectedPeriod>
        {formattedActivePeriod}/{formattedTotalPeriod}
      </SelectedPeriod>
      <ContainerButton>
        <Button
          onClick={handlePrevious}
          disabled={activePeriod === 0}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          $isActive={activePeriod === 0}
        >
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke="#42567A"
              strokeWidth="2"
            />
          </svg>
        </Button>
        <Button
          onClick={handleNext}
          disabled={activePeriod === totalPeriod - 1}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          $isActive={activePeriod === totalPeriod - 1}
        >
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
              stroke="#42567A"
              strokeWidth="2"
            />
          </svg>
        </Button>
      </ContainerButton>
    </ControlContainer>
  );
};
