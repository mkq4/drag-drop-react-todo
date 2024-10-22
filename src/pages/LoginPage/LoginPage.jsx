
import { useState } from "react";
import cl from "./LoginPage.module.css"
import authImgPath from "../../assets/images/auth.jpg";
import Button from "../../components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth.hook";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";



const LoginPage = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: "onChange"})
  const { login } = useAuth(reset, navigate) 
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("")

  const sendForm = (data) => {
    login(data)
  }
  return (
    <>
          <div className={cl.AuthInner}>
      <img className={cl.AuthInner__image} src={authImgPath} alt="" />
      <div className={cl.AuthInner__content}>
        <h1>
          <Link to="/">TODO</Link>
        </h1>
        <div className={cl.AuthInner__content_form}>
          <h2>Добро пожаловать</h2>
          <p>Пожалуйста авторизуйтесь для входа в систему</p>
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
                Войти
              </Button>
              <Link style={{marginTop: "17px"}}>Забыли пароль?</Link>
            </div>
          </form>
          <div className={cl.errorMessage}>{errorMessage}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default observer(LoginPage)