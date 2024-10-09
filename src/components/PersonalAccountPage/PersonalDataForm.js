import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputDate from "./InputDate";
import DropdownInput from "./DropdownInput";
import DefaultInput from "./DefaultInput";
import Button from "../Button";

function PersonalDataForm({ mobileVersionMenu, courseMenuClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const aboba = ["мужской", "женский"];

  const onSubmit = async (data) => {
    try {
      console.log("Данные личных данных:", data);

      const response = await fetch("URL_ЛИЧНЫХ_ДАННЫХ", {
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
        <h5 className="pa__h5">Личные данные</h5>
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
        <div className="birth__block">
          <p className="data__title">Дата рождения</p>
          <Controller
            name="date"
            control={control}
            defaultValue={{ day: "", month: "", year: "" }}
            render={({ field }) => <InputDate {...field} />}
          />
        </div>
        <div className="gender__block">
          <p className="data__title">Пол</p>
          <Controller
            name="selectedGender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DropdownInput
                {...field}
                itemsList={aboba}
                inputPlaceholder="Выберите пол"
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

export default PersonalDataForm;
