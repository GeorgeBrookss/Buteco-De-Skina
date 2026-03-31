import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #F9F6F0;
    color: #e1e1e6;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`; 