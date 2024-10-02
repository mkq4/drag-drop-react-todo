import { useContext, useState } from "react";
import cl from "./AuthInner.module.css";
import authImgPath from "../../assets/images/auth.jpg";
import Button from "../UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../http/userAPI";
import { AuthContext } from "../../providers/AuthProvider"
const LoginInner = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext)
  const signUp = async () => {
    try {
      const response = await login(email, password);
      console.log(response);
      userLogin(response)
      navigate("/");
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      setErrorMessage(error.response.data.message)
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className={cl.AuthInner}>
      <img className={cl.AuthInner__image} src={authImgPath} alt="" />
      <div className={cl.AuthInner__content}>
        <h1>
          <Link to="/">TODO</Link>
        </h1>
        <div className={cl.AuthInner__content_form}>
          <h2>Добро пожаловать</h2>
          <p>Пожалуйста авторизуйтесь для входа в систему</p>
          <form className={cl.AuthInner__form} action="">
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={cl.AuthInner__form_buttons}>
              <Button
                className={!isFormValid ? cl.disabledButton : ""}
                disabled={!isFormValid}
                onClick={(e) => {
                  e.preventDefault()
                  signUp()
                }}
              >
                Войти
              </Button>
              <Link style={{marginTop: "17px"}}>Забыли пароль?</Link>
            </div>
          </form>
          <div className={cl.errorMessage}>{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginInner;
