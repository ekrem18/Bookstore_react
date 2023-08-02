import React from "react";

import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import homeImg from "../../assets/books.jpg";
import Header from "../../components/header/Header";
import { useBooksContext } from "../../context/BooksContext";
import Card from "../../components/card/Card";

const Home = () => {
  const { myData } = useBooksContext();
  return (
    <HomeContainer>
      <Header />
      {myData.length ? (
        <CardContainer wrap="wrap">
          {myData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <HomeImage>
          <img src={homeImg} />
        </HomeImage>
      )}
    </HomeContainer>
  );
};

export default Home;
