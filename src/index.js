import { AppContainer, theme } from "./components/layout/AppContainer";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import { store } from "./store";
import React from "react";
import { ThemeProvider } from "styled-components";

ReactDom.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer />
        </ThemeProvider>
    </Provider>,
    document.querySelector("#root")
);
