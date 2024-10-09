import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
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
