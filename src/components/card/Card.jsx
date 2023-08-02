import React from "react";
import { CardButton, CardContainer, CardHeader, CardMedia } from "./Card.style";

const Card = ({ item }) => {
  return (
    <CardContainer>
      <CardHeader></CardHeader>
      <CardMedia />
      <CardButton>Check Details</CardButton>
    </CardContainer>
  );
};

export default Card;
