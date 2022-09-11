import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import Settings from "./features/settings";
import Landing from "./features/landing";

function NotFound() {
  window.location.replace("https://cornejobarraza.github.io/404");
  return null;
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/redux">
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <App />
          </Provider>
        }
      >
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
