import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

export default function RegistrationForm({ regForm, regFormClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    shouldFocusError: false,
  });

  const [shouldRenderMessage, setShouldRenderMessage] = useState(false);
  const [WrongMessage, setWrongMessage] = useState("");

  const { login } = useContext(AuthContext); // Получаем функцию login из контекста

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Отправка данных для регистрации
      const formData = new FormData();
      formData.append("username", data.email);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("phone", data.phone);

      const response = await fetch(
        "https://api.dev.kozhura.school/api/auth/users/",
        {
          method: "POST",
          body: formData, // Отправляем данные как form-data
        }
      );

      if (response.ok) {
        console.log("Регистрация прошла успешно:", data);
        reset(); // Сброс формы

        // Автоматический вход после успешной регистрации
        const loginResponse = await fetch(
          "https://api.dev.kozhura.school/auth/token/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
            }),
          }
        );

        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          const authToken = loginData.auth_token;
          login(authToken);
          setShouldRenderMessage(true);

          setTimeout(() => {
            setShouldRenderMessage(false);
          }, 3000);
        } else {
          const loginErrorData = await loginResponse.json();
          console.log("Ошибка при автоматическом входе:", loginErrorData);
          let loginErrorMessage = "Ошибка при автоматическом входе.";
          if (loginErrorData.detail) {
            loginErrorMessage = loginErrorData.detail;
          } else if (loginErrorData.errors) {
            loginErrorMessage = Object.values(loginErrorData.errors)
              .flat()
              .join(" ");
          }
          setWrongMessage(loginErrorMessage);
          setShouldRenderMessage(true);

          setTimeout(() => {
            setWrongMessage("");
            setShouldRenderMessage(false); // Скрываем сообщение через 4 секунды
          }, 4000);
        }
      } else {
        const errorData = await response.json();
        console.log("Ошибка регистрации:", errorData);

        let errorMessage = Object.values(errorData).join("\n");

        setWrongMessage(errorMessage);

        setShouldRenderMessage(true); // Показываем сообщение об успехе

        setTimeout(() => {
          setWrongMessage();
          setShouldRenderMessage(false); // Скрываем сообщение через 3 секунды
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
      <div>
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: "Подтвердите пароль",
            validate: (value) =>
              value === getValues("password") || "Пароли не совпадают",
          }}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Подтвердите пароль"
              type="password"
            />
          )}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
      </div>
      <div>
        <Controller
          name="phone"
          control={control}
          defaultValue="+7"
          rules={{
            required: "Телефон обязателен",
            validate: (value) => {
              if (!value || value.length < 11) {
                return "Введите корректный номер телефона";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"ru"}
              enableAreaCodes={true}
              enableLongNumbers={false}
              countryCodeEditable={false}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
              }}
            />
          )}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>
      <div className="form__btns">
        <Button btnType="submit" buttonTxt="Зарегистрироваться" />
        {!regForm ? (
          <Button
            btnType="button"
            buttonTxt="Войти"
            isPageLink={true}
            btnLink="/enter-page"
          />
        ) : (
          <p onClick={regFormClick} className="form-quest">
            Назад
          </p>
        )}
      </div>
      <AnimatePresence>
        {shouldRenderMessage && !WrongMessage ? (
          <motion.span
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, x: -10 }}
            transition={{ duration: 0.5 }}
            className="form__success"
          >
            Регистрация прошла успешно!
          </motion.span>
        ) : WrongMessage ? (
          <motion.span
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, x: -10 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="form__success alert"
          >
            {WrongMessage}
          </motion.span>
        ) : (
          ""
        )}
      </AnimatePresence>
    </form>
  );
}
