import { createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserStore from "./store/user.store.js";
import { Providers } from "./providers";
import App from "./App.jsx";

export const Context = createContext(null)

createRoot(document.getElementById("root")).render(
  <Context.Provider value={{
    user: new UserStore()
  }}>
    <Providers>
      <App/>
    </Providers>
  </Context.Provider>
);