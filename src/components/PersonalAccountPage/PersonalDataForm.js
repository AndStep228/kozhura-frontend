// src/components/PersonalDataForm.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputDate from "./InputDate";
import DropdownInput from "./DropdownInput";
import DefaultInput from "./DefaultInput";
import Button from "../Button";
import { AuthContext } from "../AuthContext";

function PersonalDataForm({ mobileVersionMenu, courseMenuClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      secondName: "",
      firstName: "",
      lastName: "",
      date: { day: "", month: "", year: "" },
      selectedGender: "",
    },
  });

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Вы действительно хотите выйти?");
    if (confirmLogout) {
      logout();
      navigate("/enter-page"); // Перенаправляем на страницу логина
    }
  };

  const { userData, authToken, setUserData } = useContext(AuthContext);

  const genders = ["мужской", "женский"];

  const onSubmit = async (data) => {
    try {
      if (!userData || !userData.id) {
        console.error("Нет данных пользователя или ID");
        toast.error("Ошибка: Не удалось определить пользователя.");
        return;
      }

      const userId = userData.id;

      // Преобразование даты рождения в формат YYYY-MM-DD
      const { day, month, year } = data.date_of_birth;
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;

      const payload = {
        last_name: data.last_name,
        first_name: data.first_name,

        // Добавьте другие поля по необходимости
      };

      const response = await fetch(
        `https://api.dev.kozhura.school/api/auth/users/${userId}/`,
        {
          method: "PATCH", // или "PATCH" в зависимости от API
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`, // Включаем токен в заголовки
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log("Личные данные обновлены успешно");
        const updatedUser = await response.json();
        setUserData(updatedUser); // Обновляем userData в контексте
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        toast.success("Личные данные успешно обновлены.");
      } else {
        const errorData = await response.json();
        console.log("Ошибка при обновлении личных данных:", errorData);
        let errorMessage = "Ошибка при обновлении данных.";

        if (errorData.detail) {
          errorMessage = errorData.detail;
        } else if (errorData.errors) {
          errorMessage = Object.values(errorData.errors).flat().join(" ");
        }

        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      toast.error("Произошла ошибка. Попробуйте ещё раз.");
    }
  };

  return (
    <div className="pa__content-wrapper">
      <div className="pa__title">
        <h5 className="pa__h5">Личные данные</h5>
        {mobileVersionMenu && (
          <Button onClick={courseMenuClick} buttonTxt="Меню" />
        )}
        <Button buttonTxt="logout" onClick={handleLogout} />
      </div>

      <form className="form-pa" onSubmit={handleSubmit(onSubmit)}>
        <div className="fio__block">
          <p className="data__title">ФИО</p>
          <Controller
            name="last_name"
            control={control}
            defaultValue={userData?.last_name || ""}
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Фамилия"
                error={errors.last_name?.message}
              />
            )}
          />
          <Controller
            name="first_name"
            control={control}
            defaultValue={userData?.first_name || ""}
            render={({ field }) => (
              <DefaultInput
                {...field}
                inputType="text"
                inputPlaceholder="Имя"
                error={errors.first_name?.message}
              />
            )}
          />
          <Controller
            name="middle_name"
            control={control}
            defaultValue={userData?.middle_name || ""}
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
            name="date_of_birth"
            control={control}
            defaultValue={
              userData?.date_of_birth
                ? {
                    day: userData.date_of_birth.split("-")[2],
                    month: userData.date_of_birth.split("-")[1],
                    year: userData.date_of_birth.split("-")[0],
                  }
                : { day: "", month: "", year: "" }
            }
            render={({ field }) => (
              <InputDate {...field} error={errors.date_of_birth?.message} />
            )}
          />
        </div>
        <div className="gender__block">
          <p className="data__title">Пол</p>
          <Controller
            name="gender"
            control={control}
            defaultValue={userData?.gender || ""}
            render={({ field }) => (
              <DropdownInput
                {...field}
                itemsList={genders}
                inputPlaceholder="Выберите пол"
                error={errors.gender?.message}
              />
            )}
          />
        </div>
        <div className="form__btns">
          <Button btnType="submit" buttonTxt="Обновить данные" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default PersonalDataForm;
