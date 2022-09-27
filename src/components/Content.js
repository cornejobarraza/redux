import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, PrivateRoute, NotFound } from "components";

const Login = lazy(() => import("pages/Login"));
const Landing = lazy(() => import("pages/Landing"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const Lists = lazy(() => import("pages/Lists"));
const Settings = lazy(() => import("pages/Settings"));

export { Content };

function Content() {
  return (
    <div className="content">
      <ErrorBoundary>
        <Suspense fallback={<div className="md:text-center">Loading...</div>}>
          <Routes>
            <Route path="*" element={<NotFound />} />
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
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
