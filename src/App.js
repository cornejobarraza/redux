import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Navbar, Sidebar, Content, ViewportProvider } from "components";

import { history } from "utils";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  // Init custom history object to allow navigation from
  // anywhere in the React app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="redux">
      <ViewportProvider>
        <ToastContainer theme="dark" style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }} />
        <Navbar />
        <Sidebar />
        <Content />
      </ViewportProvider>
    </div>
  );
}

export default App;
