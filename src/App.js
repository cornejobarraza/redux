import { useRef, useState, useEffect, Suspense, lazy } from "react";
import { history } from "helpers";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Sidebar, SidebarToggle, SlideOver, ErrorBoundary, PrivateRoute, NotFound } from "components";

const Login = lazy(() => import("pages/Login"));
const Landing = lazy(() => import("pages/Landing"));
const Lists = lazy(() => import("pages/Lists"));
const Settings = lazy(() => import("pages/Settings"));

function App() {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSlideOverOpen(false);
    }
    // eslint-disable-next-line
  }, [history.location]);

  const toggleSidebar = () => {
    isSlideOverOpen ? setIsSlideOverOpen(false) : setIsSlideOverOpen(true);
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
                path="lists"
                element={
                  <PrivateRoute>
                    <Lists />
                  </PrivateRoute>
                }
              />
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
      <SidebarToggle handler={toggleSidebar} />
      <SlideOver open={isSlideOverOpen} handler={toggleSidebar} />
    </div>
  );
}

export default App;
