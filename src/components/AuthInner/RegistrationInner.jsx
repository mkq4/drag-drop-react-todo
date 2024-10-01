import { useState } from "react";
import cl from "./AuthInner.module.css";
import authImgPath from "../../assets/images/auth.jpg";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { registration } from "../../http/userAPI";
import { useNavigate } from "react-router-dom";

const RegistrationInner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const signIn = async () => {
    try {
      const response = await registration(email, password);
      console.log(response); // Вывод ответа в консоль

      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('/')

    } catch (error) {
      console.error('Ошибка регистрации:', error);
    }
  };

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
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Зарегестририроваться
              </Button>
              <div style={{textAlign: "center", marginTop: "5px"}}>
                <Link to="/login">Уже есть аккаунт?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationInner;
