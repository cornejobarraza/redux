import { lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PrivateRoute } from "components/Content/PrivateRoute";

const Login = lazy(() => import("pages/Login"));
const Landing = lazy(() => import("pages/Landing"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const Wishlist = lazy(() => import("pages/Wishlist"));
const Settings = lazy(() => import("pages/Settings"));

export { Routing };

function Routing() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="flex flex-col gap-4">
            <p>Sorry, the page you were looking for doesn't exist</p>
            <Link className="text-redux-500" to="/">
              Go back
            </Link>
          </div>
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Landing />
          </PrivateRoute>
        }
      />
      <Route
        path="about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
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
    </Routes>
  );
}
