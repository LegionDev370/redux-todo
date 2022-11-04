import React from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./TodoAppMobile";
import { Provider } from "react-redux";
import { store } from "./store/store";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>
);
