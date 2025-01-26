import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #F4F5F9;
        font-family: 'PT Sans', sans-serif;
    }
    :root {
    --color-text: #42567A;
}
`;
