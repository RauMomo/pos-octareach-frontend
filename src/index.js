import "./App.module.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardPage from "./views/dashboard/dashboard_page";
import NotFoundPage from "./views/not_found";
import ProfilePage from "./views/pages/profile_page";
import ForgotPage from "./views/session/forgot_page";
import RegisterPage from "./views/session/register_page";
import ResetPage from "./views/session/reset_page";
import SignInPage from "./views/session/signin_page";

const root = ReactDOM.createRoot(document.getElementById("root"));

var router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
reportWebVitals();
