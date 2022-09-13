import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter basename="redux">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
