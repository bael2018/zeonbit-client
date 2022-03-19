import { createGlobalStyle } from "styled-components";
import { App } from "../../App";

export const theme = {
    media: {
        extra_small: "(max-width: 425px)",
        small: "(max-width: 768px)",
        medium: "(max-width: 992px)",
        large: "(max-width: 1300px)",
        extra_large: "(max-width: 1500px)",
    },
};

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

const AppContainer = () => {
    return (
        <>
            <GlobalStyles />
            <App />
        </>
    );
};

export { AppContainer };
