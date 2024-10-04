import React, { useState, useEffect, useRef } from "react";
import DropdownInput from "./PersonalAccountPage/DropdownInput";
import countries from "i18n-iso-countries";
import ru from "i18n-iso-countries/langs/ru.json";

countries.registerLocale(ru);

export default function SelectCountryCity(setGlobalLoading) {
  const [countryNames, setCountryNames] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "ck9qc3p6MlFEVm1NRDNqQnd4azVLb1hBdktUTW13TkU3WTJwS1FNeA=="
    );

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Получаем список кодов стран (например, "US", "RU")
        const countryCodes = result.map((country) => country.iso2);

        // Используем библиотеку для перевода кодов стран на русский язык
        const translatedCountryNames = countryCodes.map(
          (code) => countries.getName(code, "ru") // 'ru' — это код для русского языка
        );

        setCountryNames(translatedCountryNames);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      {countryNames.length > 0 ? (
        <DropdownInput
          inputName="country"
          inputPlaceholder="Страна"
          itemsList={countryNames}
        />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}
