import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
  }

  strong {
    font-weight: 700;
  }
`;
