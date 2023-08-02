import React from "react";
import { CardButton, CardContainer, CardHeader, CardMedia } from "./Card.style";

const Card = ({ item }) => {
  const {volumeInfo} = item;
  return (
    <CardContainer>
      <CardHeader>{volumeInfo?.title}</CardHeader>
      <CardMedia src={volumeInfo?.imageLinks?.smallThumbnail}/>
      <CardButton>Check Details</CardButton>
    </CardContainer>
  );
};

export default Card;
