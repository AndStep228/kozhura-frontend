import React, { useState, useEffect } from "react";
import { useForm, Controller, setFocus } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";

export default function EnterPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    shouldFocusError: false,
  });

  const [shouldRenderMessage, setShouldRenderMessage] = useState(false);
  const [WrongMessage, setWrongMessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("username", data.email);
      formData.append("password", data.password);

      const response = await fetch(
        "https://api.dev.kozhura.school/auth/token/login",
        {
          method: "POST",
          body: formData, // Отправляем данные как form-data
        }
      );

      if (response.ok) {
        console.log("Вход успешен:", response);
        reset();
      } else {
        const errorData = response;

        console.log(errorData);
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
    }
  };
  return (
    <div id="promo" className="main__promo enter-promo">
      <div className="container">
        <div className="promo__wrapper">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email обязателен",
                  pattern: {
                    message: "Введите корректный email",
                  },
                }}
                render={({ field }) => (
                  <input {...field} placeholder="Почта" type="text" />
                )}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
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
              <Link to="#" className="forgot-pass">
                Забыли пароль?
              </Link>
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
              <Link to="#" className="forgot-pass">
                Еще нет аккаунта? Зарегистрируйтесь
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
