import React from "react";
import { Container, Date_1, Date_2 } from "../style";

export const Dates: React.FC<{ dates: string }> = ({ dates }) => {
  const [date1, date2] = dates.split(" ");

  return (
    <Container>
      <Date_1>{date1}</Date_1>
      <Date_2>{date2}</Date_2>
    </Container>
  );
};
