import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    h1{font-size: 28px; line-height: 34px; }
    .wrap-inner{
        width: 1160px;
        margin: 0 auto;
    }
    footer{
        font-size: 12px;
    }
`;

export default GlobalStyle;
