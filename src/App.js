import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import PrivateRoute from "./components/privateRoute";
import Landing from "./features/landing";
import Settings from "./features/settings";

function NotFound() {
  window.location.replace("https://cornejobarraza.github.io/404");
  return null;
}

function App() {
  return (
    <div className="redux">
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
