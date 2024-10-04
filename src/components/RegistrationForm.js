import React, { useState, useEffect } from "react";
import { useForm, Controller, setFocus } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

export default function RegistrationForm() {
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
  const [WrongMessage, setWrongMessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      const userData = {
        username: data.email, // Замените "email" на то, что требуется серверу
        password: data.password,
        phone: data.phone,
      };
      console.log(JSON.stringify(userData));
      // Отправляем POST-запрос с данными
      const response = await fetch(
        "https://api.dev.kozhura.school/api/courses/register_user/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), // Преобразуем данные в JSON
        }
      );

      // Если сервер вернул успешный ответ
      if (response.ok) {
        console.log("Регистрация прошла успешно:", userData);
        reset(); // Сброс формы
        setShouldRenderMessage(true); // Показываем сообщение об успехе

        setTimeout(() => {
          setShouldRenderMessage(false); // Скрываем сообщение через 3 секунды
        }, 3000);
      } else {
        const errorData = await response.json();
        console.log("Ошибка регистрации:", errorData.username);
        setWrongMessage(errorData.username);

        setShouldRenderMessage(true); // Показываем сообщение об успехе

        setTimeout(() => {
          setWrongMessage();
          setShouldRenderMessage(false); // Скрываем сообщение через 3 секунды
        }, 3000);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
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
        <Button
          btnType="button"
          buttonTxt="Войти"
          isPageLink={true}
          btnLink="/enter-page"
        />
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
            transition={{ duration: 0.5 }}
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
