import { useRef, useState, useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "store";
import { history } from "helpers";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Sidebar, Toggle, SlideOver, ErrorBoundary, PrivateRoute, NotFound } from "components";

const Login = lazy(() => import("pages/Login"));
const Landing = lazy(() => import("pages/Landing"));
const Settings = lazy(() => import("pages/Settings"));

function App() {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);

  // Init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (history.location.pathname !== "/login") {
      dispatch(userActions.resetStatus());
    }

    closeSidebar();
    // eslint-disable-next-line
  }, [history.location, dispatch]);

  const closeSidebar = () => {
    sidebarRef.current.classList.remove("visible");
    sidebarRef.current.classList.remove("duration-500");
    sidebarRef.current.classList.remove("delay-[400ms]");
    sidebarRef.current.classList.remove("opacity-100");
    setIsSlideOverOpen(false);
  };

  const openSidebar = () => {
    sidebarRef.current.classList.add("visible");
    sidebarRef.current.classList.add("duration-500");
    sidebarRef.current.classList.add("delay-[400ms]");
    sidebarRef.current.classList.add("opacity-100");
    setIsSlideOverOpen(true);
  };

  const toggleSidebar = () => {
    isSlideOverOpen ? closeSidebar() : openSidebar();
  };

  return (
    <div className="redux">
      <Navbar />
      <Sidebar sidebarRef={sidebarRef} />
      <div className="content">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Landing />
                  </PrivateRoute>
                }
              />
              <Route path="login" element={<Login />} />
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
          </Suspense>
        </ErrorBoundary>
      </div>
      <Toggle handler={toggleSidebar} />
      <SlideOver open={isSlideOverOpen} handler={toggleSidebar} />
    </div>
  );
}

export default App;
