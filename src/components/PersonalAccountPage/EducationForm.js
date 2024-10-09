import React from "react";
import { useForm, Controller } from "react-hook-form";
import DropdownInput from "./DropdownInput";
import DefaultInput from "./DefaultInput";
import Button from "../Button";

function EducationForm({ mobileVersionMenu, courseMenuClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const aboba2 = ["нкэивт", "нгту"];
  const aboba3 = ["программирование", "сети"];

  const onSubmit = async (data) => {
    try {
      console.log("Данные об образовании:", data);

      const response = await fetch("URL_ОБРАЗОВАНИЯ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Данные об образовании обновлены успешно");
      } else {
        const errorData = await response.json();
        console.log("Ошибка при обновлении данных об образовании:", errorData);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div className="pa__content-wrapper">
      <div className="pa__title">
        <h5 className="pa__h5">Учебные заведения</h5>
        {mobileVersionMenu && (
          <Button onClick={courseMenuClick} buttonTxt="Меню" />
        )}
      </div>
      <form className="form-pa" onSubmit={handleSubmit(onSubmit)}>
        <div className="teach-place__block">
          <p className="data__title">Учебное заведение</p>
          <Controller
            name="selectedTeachPlace"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DropdownInput
                {...field}
                itemsList={aboba2}
                inputPlaceholder="Выберите заведение"
              />
            )}
          />
        </div>
        <div className="teach-place__block">
          <p className="data__title">Факультет</p>
          <Controller
            name="selectedFaculty"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DropdownInput
                {...field}
                itemsList={aboba3}
                inputPlaceholder="Выберите факультет"
              />
            )}
          />
        </div>
        <div className="teach-place__block">
          <p className="data__title">Курс</p>
          <Controller
            name="courseNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="number"
                inputPlaceholder="Выберите курс"
                inputNumberMin={1}
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

export default EducationForm;
