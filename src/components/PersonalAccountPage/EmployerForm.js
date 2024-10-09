import React from "react";
import { useForm, Controller } from "react-hook-form";
import DefaultInput from "./DefaultInput";
import Button from "../Button";

function EmployerForm({ mobileVersionMenu, courseMenuClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Данные личных данных:", data);

      const response = await fetch("URL_ДАННЫХ_РАБОТОДАТЕЛЯ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Личные данные обновлены успешно");
      } else {
        const errorData = await response.json();
        console.log("Ошибка при обновлении личных данных:", errorData);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div className="pa__content-wrapper">
      <div className="pa__title">
        <h5 className="pa__h5">Работодатель</h5>
        {mobileVersionMenu && (
          <Button onClick={courseMenuClick} buttonTxt="Меню" />
        )}
      </div>
      <form className="form-pa" onSubmit={handleSubmit(onSubmit)}>
        <div className="fio__block">
          <p className="data__title">ФИО</p>
          <Controller
            name="secondName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Фамилия"
              />
            )}
          />
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Имя"
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Отчество"
              />
            )}
          />
        </div>
        <div className="company-name__block">
          <p className="data__title">Название компании</p>
          <Controller
            name="companyName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Название"
              />
            )}
          />
        </div>
        <div className="specialization__block">
          <p className="data__title">Специализация компании</p>
          <Controller
            name="specialization"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Специализация"
              />
            )}
          />
        </div>
        <div className="form__btns">
          <Button btnType="submit" buttonTxt="Обновить данные" />
        </div>
      </form>
    </div>
  );
}

export default EmployerForm;
