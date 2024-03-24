import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-main-background: #1A1A20; 

   --transition: all 0.5s;

   --max-width: 1400px;
}
body{
   background-color: var(--color-main-background);
   color: var(--font-main-gray);
}

`;

export default GlobalStyles;
