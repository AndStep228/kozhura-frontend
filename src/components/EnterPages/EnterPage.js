import React, { useState, useEffect } from "react";
import { useForm, Controller, setFocus } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Button from "../Button";

export default function EnterPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    shouldFocusError: false,
  });

  const onSubmit = async (data) => {
    try {
      const userData = {
        username: data.email, // Замените "email" на то, что требуется серверу
        password: data.password,
      };
      console.log(JSON.stringify(userData));
      // Отправляем POST-запрос с данными
      const response = await fetch(
        "https://api.dev.kozhura.school/api/auth/login",
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
        console.log("Вход прошлел успешно:", userData);
        reset(); // Сброс формы
      } else {
        const errorData = await response.json();
        console.log("Ошибка регистрации:", errorData.username);
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
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Введите корректный email",
                  },
                }}
                render={({ field }) => (
                  <input {...field} placeholder="Почта" type="email" />
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
