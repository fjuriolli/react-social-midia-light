import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  small: "576px",
  medium: "768px",
  large: "992px",
  extraLarge: "1200px"
});

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: rgb(255, 254, 252) !important;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    text-decoration: none;
  }
`;
