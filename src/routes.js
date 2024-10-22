import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import PrivatePage from "./pages/PrivatePage.jsx";

export const privateRoutes = [
  {
    path: "/privatePage",
    Component: PrivatePage,
  },
];

export const publicRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/registration",
    Component: RegistrationPage,
  },
];
