//create global styles

import { createGlobalStyle } from "styled-components";




export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* text-transform: uppercase; */
    font-family: 'Shantell Sans', cursive;
}

body{
    font-size: 1.5rem;
    background-image: url(https://images.alphacoders.com/115/1159192.jpg);
    /* background-position: center; */
    background-size: cover;
    background-repeat: no-repeat;
}


`;