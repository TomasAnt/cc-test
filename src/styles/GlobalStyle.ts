import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-image: linear-gradient(to right, #FFFFFF 52.5%, #F5F5F5 47.5%);

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    background-image: linear-gradient(to right,#F5F5F5 50%, #F5F5F5 50%);;
  }
}

h1, h2, h3, h4, p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}
`;

export default GlobalStyle;
