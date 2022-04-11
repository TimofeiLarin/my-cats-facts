import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
@font-face {
  font-family: 'Yusei Magic';
  src: url('./assets/fonts/YuseiMagic-Regular.ttf') format('truetype');
  font-style: normal;
  font-weight: 400;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family:'Yusei Magic', Arial, Georgia, sans-serif;
    font-size: 16px;
    color: black;
}
`;
