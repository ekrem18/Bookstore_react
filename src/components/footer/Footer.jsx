import React from "react";
import { FooterBtn, FooterContainer } from "./Footer.style";
import {darkIcon, lightIcon} from "../../helper/iconData"
import { useThemeContext } from "../../context/ThemeContext";


const Footer = () => {
const {myTheme,setMyTheme} = useThemeContext();

const handleClick = () => {
 
  setMyTheme(prev => (prev === "light" ? "dark" : "light"));
    //statein anlık durumuna göre güncelleme yapacak. kullanıcı tıkladıkça toggle mantığı kurmuş olduk
    // setter metodu içerisine bir callback function kabul edebiliyor. Bu callback function parametre alan bir function ve bu parametre statein anlık değerini temsil ediyor. Bu parametreye göre ekstra işlemler veya kontroller yapabilir
}

  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>{myTheme === "light" ? lightIcon : darkIcon}</FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
