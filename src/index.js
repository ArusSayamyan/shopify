import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./configs/axios.config";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "src/redux/store";

import App from "./App/App";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,

    document.getElementById("root")
);