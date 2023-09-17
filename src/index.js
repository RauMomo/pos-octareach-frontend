import "./App.module.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./views/not_found";
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
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
reportWebVitals();
