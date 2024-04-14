import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import { appTheme } from "./styles/SystemDesign";
import Checkout from "./screens/Checkout";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <Checkout />
    </ThemeProvider>
  );
}

export default App;
