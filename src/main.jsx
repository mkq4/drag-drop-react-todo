import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
