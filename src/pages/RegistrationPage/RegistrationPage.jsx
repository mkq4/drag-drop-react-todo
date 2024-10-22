/* eslint-disable no-unused-vars */
import { useState } from "react";
import authImgPath from "../../assets/images/auth.jpg";
import Button from "../../components/UI/Button/Button";
import cl from "./RegistrationPage.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth.hook";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: "onChange"})

  const [errorMessage, setErrorMessage] = useState('')
  const {registration} = useAuth(reset, navigate)

  const sendForm = (data) => {
    registration(data)
  }
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
          <form className={cl.AuthInner__form} action="" onSubmit={handleSubmit(sendForm)}>
          <input
              type="text"
              {...register("email", {required: "ваша почта"})}
            />
            <input
              type="password"
              {...register("password", {required: "ваш пароль"})}
            />
            <div className={cl.AuthInner__form_buttons}>
              <Button
                disabled={!isValid}
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


export default RegistrationPage