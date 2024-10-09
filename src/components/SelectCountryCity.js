import React, { useState, useEffect } from "react";
import DropdownInput from "./PersonalAccountPage/DropdownInput";
import countries from "i18n-iso-countries";
import ru from "i18n-iso-countries/langs/ru.json";

countries.registerLocale(ru);

export default function SelectCountryCity(props) {
  const [countryNames, setCountryNames] = useState([]);
  const [cityNames, setCityNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = new Headers();
    const countryApiKey = process.env.REACT_APP_COUNTRY_API_KEY;
    headers.append("X-CSCAPI-KEY", `${countryApiKey}`);

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const countryCodes = result.map((country) => country.name);

        setCountryNames(countryCodes);
      })
      .catch((error) => console.log("error", error));

    fetch(
      `https://api.countrystatecity.in/v1/countries/RU/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const cityCodes = result.map((city) => city.name);
        setCityNames(cityCodes);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="country-city__wrapper">
      {countryNames.length > 0 ? (
        <DropdownInput
          inputName="country"
          inputPlaceholder="Страна"
          itemsList={countryNames}
        />
      ) : (
        <p>Загрузка...</p>
      )}
      {cityNames.length > 0 ? (
        <DropdownInput
          inputName="city"
          inputPlaceholder="Город"
          itemsList={cityNames}
        />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}
