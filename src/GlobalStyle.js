import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.secondary.background};
  color: ${({ theme }) => theme.primary.color};
 
}
`;
export default GlobalStyle;
