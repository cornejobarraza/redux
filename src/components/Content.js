import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, PrivateRoute } from "components";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import loading from "../loading.json";

const Login = lazy(() => import("pages/Login"));
const Landing = lazy(() => import("pages/Landing"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const Wishlist = lazy(() => import("pages/Wishlist"));
const Settings = lazy(() => import("pages/Settings"));

export { Content };

function Content() {
  const { pending } = useSelector((state) => state.user);

  return (
    <div className="content">
      {(pending.login || pending.update || pending.logout) && (
        <>
          <div className="backdrop"></div>
          <Lottie className="lottie" animationData={loading} />
        </>
      )}
      <ErrorBoundary>
        <Suspense fallback={<div className="md:text-center">Loading...</div>}>
          <Routes>
            <Route path="*" element={<div className="md:text-center">Sorry, this page doesn't exist :(</div>} />
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
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
