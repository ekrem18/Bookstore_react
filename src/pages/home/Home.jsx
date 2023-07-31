import React from 'react'
import { Header } from '../login/Login.style'
import { CardContainer, HomeContainer, HomeImage } from './Home.style'
import homeImg from "../../assets/books.jpg"

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <HomeImage>
        <img src={homeImg} />
      </HomeImage>
      <CardContainer>
        <Card/>
      </CardContainer>
    </HomeContainer>
  )
}

export default Home