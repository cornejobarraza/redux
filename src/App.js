import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useIdleTimer } from "react-idle-timer";
import { ToastContainer } from "react-toastify";

import { Navbar, Sidebar, Content, ViewportProvider } from "components";

import { userActions } from "store";
import { history } from "utils";

import "react-toastify/dist/ReactToastify.min.css";

// Convert 30 minutes to milliseconds
const idleTimeout = 30 * 60_000;

function App() {
  const {
    logged: { status: logged },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Init custom history object to allow navigation from
  // anywhere in the React app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  const idleLogOut = () => {
    if (logged) {
      dispatch(userActions.logOutAsync());
    }
  };

  useIdleTimer({
    onIdle: idleLogOut,
    timeout: idleTimeout,
  });

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
