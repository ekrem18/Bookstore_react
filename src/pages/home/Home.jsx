import React from 'react'
import { Header } from '../login/Login.style'
import { CardContainer, HomeContainer, HomeImage, Card } from './Home.style'
import homeImg from "../../assets/books.jpg"

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <CardContainer>
        <Card/>
      </CardContainer>
      <HomeImage>
        <img src={homeImg} />
      </HomeImage>
    </HomeContainer>
  )
}

export default Home