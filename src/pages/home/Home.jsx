import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, } from "./Home.style";
// import homeImg from "../../assets/books.jpg";
import { useBooksContext } from "../../context/BooksContext";

const Home = () => {
  const { myData } = useBooksContext();
  return (
    <HomeContainer>
      <Header />
      {myData.length ? (
        <CardContainer wrap="wrap">
          {myData.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <CardContainer wrap="wrap">
          {myData.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
