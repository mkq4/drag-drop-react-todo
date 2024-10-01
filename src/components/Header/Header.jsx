import MyLink from "../UI/Link/MyLink";
import cl from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../http/userAPI";
import Button from "../UI/Button/Button";
const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [accountName, setAccountName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const email = user["email"];
      // console.log(email);
      setAccountName(email);
      setIsAuth(true);
    }
  }, []);

  const accountLogout = () => {
    try {
      const response = logout()
      if(response) {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setIsAuth(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className={cl.header}>
      <div className={cl.header__logo}>
        <h1>
          <Link to="/">react to-do</Link>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z" />
        </svg>
      </div>
      <div className={cl.header__auth}>
        {isAuth ? (
          <>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{accountName}</p>
            <Button onClick={() => accountLogout()}>Logout</Button>
          </>
        ) : (
          <>
            {" "}
            <MyLink path="/login">Login</MyLink>{" "}
            <MyLink path="/registration">Registration</MyLink>{" "}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
