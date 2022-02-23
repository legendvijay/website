import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "../utils/Theme";
import { StyledEngineProvider } from "@mui/material";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
html {
  background: ${Theme.background.backgroundColor};
  scroll-behavior: smooth;

}
body {
  max-width: 100vw;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0.25em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${Theme.background.backgroundColor};

}
 
::-webkit-scrollbar-thumb {
  outline: 1px solid ${Theme.background.backgroundColorLight}9d;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
