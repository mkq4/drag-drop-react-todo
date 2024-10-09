/* eslint-disable no-unused-vars */
import { useState } from "react";
import cl from "./AuthInner.module.css";
import authImgPath from "../../assets/images/auth.jpg";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RegistrationInner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const isFormValid = email.trim() !== "" && password.trim() !== "";
  const [errorMessage, setErrorMessage] = useState('')


  return (
    <div className={cl.AuthInner}>
      <img className={cl.AuthInner__image} src={authImgPath} alt="" />
      <div className={cl.AuthInner__content}>
        <h1>
          <Link to="/">TODO</Link>
        </h1>
        <div
          className={`${cl.AuthInner__content_form} ${cl.AuthInner__content_form_registration}`}
        >
          <h2>Добро пожаловать</h2>
          <p>Пожалуйста зарегистрируйтесь для продолжения работы</p>
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
              >
                Зарегестририроваться
              </Button>
              <div style={{textAlign: "center", marginTop: "5px"}}>
                <Link to="/login">Уже есть аккаунт?</Link>
              </div>
            </div>
          </form>
          <div className={cl.errorMessage}>{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationInner;
