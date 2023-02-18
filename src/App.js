import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import { Navbar, Sidebar, Content, ViewportProvider } from "components";

import { history } from "utils";
import { userActions } from "store";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const dispatch = useDispatch();

  // Init custom history object to allow navigation from
  // anywhere in the React app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  const pathName = history.location.pathname;

  useEffect(() => {
    // Reset pending and error statuses after leaving pages
    return () => {
      dispatch(userActions.clearStatus());
    };
  }, [pathName, dispatch]);

  return (
    <div className="redux">
      <ViewportProvider>
        <ToastContainer theme="dark" style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }} pauseOnFocusLoss />
        <Navbar />
        <Sidebar />
        <Content />
      </ViewportProvider>
    </div>
  );
}

export default App;
