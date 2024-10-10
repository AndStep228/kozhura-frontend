import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../AuthContext";

export default function DefaultEnterPage({ forgotPassClick, regFormClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    shouldFocusError: false,
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Правильное использование useContext
  const [WrongMessage, setWrongMessage] = useState("");

  const [shouldRenderMessage, setShouldRenderMessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await fetch(
        "https://api.dev.kozhura.school/auth/token/login",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        console.log("Вход успешен:", responseData);
        const authToken = responseData.auth_token;

        login(authToken); // Сохраняем токен через контекст
        navigate("/personal-account");
        reset(); // Сбрасываем форму
      } else {
        console.log("Ошибка ответа:", responseData);
        let errorMessage = "";

        if (responseData.detail) {
          errorMessage = responseData.detail;
        } else {
          errorMessage = Object.values(responseData).join("\n");
        }

        setWrongMessage(errorMessage);
        setShouldRenderMessage(true);

        setTimeout(() => {
          setWrongMessage("");
          setShouldRenderMessage(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      setWrongMessage("Произошла ошибка. Попробуйте ещё раз.");
      setShouldRenderMessage(true);

      setTimeout(() => {
        setWrongMessage("");
        setShouldRenderMessage(false);
      }, 4000);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email обязателен",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Введите корректный email",
            },
          }}
          render={({ field }) => (
            <input {...field} placeholder="Почта" type="email" />
          )}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: "Пароль обязателен" }}
          render={({ field }) => (
            <input {...field} placeholder="Пароль" type="password" />
          )}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>
      <div className="form__btns">
        <p onClick={forgotPassClick} className="form-quest">
          Забыли пароль?
        </p>
        <Button btnType="submit" buttonTxt="Войти" />
        <AnimatePresence>
          {shouldRenderMessage && !WrongMessage ? (
            <motion.span
              initial={{ opacity: 0, y: -10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -10, x: -10 }}
              transition={{ duration: 0.5 }}
              className="form__success"
            >
              Вход успешен
            </motion.span>
          ) : WrongMessage ? (
            <motion.span
              initial={{ opacity: 0, y: -10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -10, x: -10 }}
              transition={{ duration: 0.5 }}
              className="form__success alert"
            >
              {WrongMessage}
            </motion.span>
          ) : (
            ""
          )}
        </AnimatePresence>
        <p onClick={regFormClick} className="form-quest">
          Еще нет аккаунта? Зарегистрируйтесь
        </p>
      </div>
    </form>
  );
}
