import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "./Button";

const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Отправка данных формы
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
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: "Телефон обязателен" }}
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
        <Button btnType="button" buttonTxt="Войти" />
      </div>
    </form>
  );
};

export default RegistrationForm;
