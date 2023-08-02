import React from 'react'

import { CardContainer, HomeContainer, HomeImage, Card } from './Home.style'
import homeImg from "../../assets/books.jpg"
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <HomeContainer>
      <Header />
       <CardContainer>
         {/* <Card/> */}
       </CardContainer>
      <HomeImage>
        <img src={homeImg} />
      </HomeImage>
    </HomeContainer>
  )
}

export default Home