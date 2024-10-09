import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../Button";
import { Link } from "react-router-dom";

function ChangePasswordForm({ mobileVersionMenu, courseMenuClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Данные для смены пароля:", data);

      const response = await fetch("URL_СМЕНЫ_ПАРОЛЯ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Пароль успешно изменён");
      } else {
        const errorData = await response.json();
        console.log("Ошибка при смене пароля:", errorData);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div className="pa__content-wrapper">
      <div className="pa__title">
        <h5 className="pa__h5">Сменить пароль</h5>
        {mobileVersionMenu && (
          <Button onClick={courseMenuClick} buttonTxt="Меню" />
        )}
      </div>
      <div className="password-change">
        <form className="form-pa" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Пароль обязателен" }}
              render={({ field }) => (
                <input
                  {...field}
                  className="data-inputs"
                  placeholder="Старый пароль"
                  type="password"
                />
              )}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <div>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              rules={{ required: "Новый пароль обязателен" }}
              render={({ field }) => (
                <input
                  {...field}
                  className="data-inputs"
                  placeholder="Новый пароль"
                  type="password"
                />
              )}
            />
            {errors.newPassword && (
              <span className="error">{errors.newPassword.message}</span>
            )}
          </div>
          <Link to="#" className="forgot-pass">
            Забыли пароль?
          </Link>
          <div className="form__btns">
            <Button btnType="submit" buttonTxt="Обновить данные" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
