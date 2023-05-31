import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
