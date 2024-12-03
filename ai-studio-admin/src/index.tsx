import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "~assets/scss/common.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import store, { persistor } from "./shared/lib/redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "~/muiPublish/theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
