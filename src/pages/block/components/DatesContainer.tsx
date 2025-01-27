import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  color: #42567a;
  z-index: 0;
  width: 973px;
  display: flex;
`;
const Date_1 = styled.div`
  color: #3877ee;
`;
const Date_2 = styled.div`
  margin-left: 80px;

  color: #ef5da8;
`;
export const Dates: React.FC<{ dates: string }> = ({ dates }) => {
  const [date1, date2] = dates.split(" ");

  return (
    <Container>
      <Date_1>{date1}</Date_1>
      <Date_2>{date2}</Date_2>
    </Container>
  );
};
