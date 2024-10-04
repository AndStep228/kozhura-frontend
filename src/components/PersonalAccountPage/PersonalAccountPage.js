import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller, setFocus } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import SelectCountryCity from "../SelectCountryCity";
import InputDate from "./InputDate";
import DropdownInput from "./DropdownInput";

export default function PersonalAccountPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    shouldFocusError: false,
  });

  const [aboba] = useState(["мужской", "женский"]);
  const [aboba2] = useState(["нкэивт", "нгту"]);
  const [aboba3] = useState(["программирование", "сети"]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [courseMenu, setCourseMenu] = useState(false);
  const [mobileVersionMenu, setMobileVersionMenu] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const courseMenuClick = () => {
    setCourseMenu(!courseMenu);
  };

  const onSubmit = async (data) => {};

  const content = [
    {
      id: "Мои курсы",
      key: "courses",
      html: (
        <div className="pa__content-wrapper">
          <div className="pa__title">
            <h5 className="pa__h5">Мои курсы</h5>
            {mobileVersionMenu && (
              <Button onClick={courseMenuClick} buttonTxt="Меню" />
            )}
          </div>
          <div className="my-course__block">
            <div className="my-course__item">
              {/* <img className="my-course__item-bkg" src="" alt="" /> */}
              <div className="my-course__item-info">
                <h5>Системы фасадные с наружными штукатурными слоями</h5>
                <Button isPageLink={true} buttonTxt="Перейти к обучению" />
                <div className="my-course__detail">
                  <div className="detail__item">
                    <h5>Разделы</h5>
                    <h2>5</h2>
                    <img src="/img/PersonalAccount/razdel.svg" alt="" />
                  </div>
                  <div className="detail__item">
                    <h5>Разделы</h5>
                    <h2>5</h2>
                    <img src="/img/PersonalAccount/razdel.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Личные данные",
      key: "personal-data",
      html: (
        <div className="pa__content-wrapper">
          <div className="pa__title">
            <h5 className="pa__h5">Личные данные</h5>
            {mobileVersionMenu && (
              <Button onClick={courseMenuClick} buttonTxt="Меню" />
            )}
          </div>
          <div className="personal-data">
            <div className="fio__block">
              <p className="data__title">ФИО</p>
              <input
                placeholder="Фамилия"
                className="data-inputs"
                type="text"
              />
              <input placeholder="Имя" className="data-inputs" type="text" />
              <input
                placeholder="Отчество"
                className="data-inputs"
                type="text"
              />
            </div>
            {/* <div className="birth__block">
              <p className="data__title">Дата рождения</p>
              <InputDate />
            </div> */}
            <div className="gender__block">
              <p className="data__title">Пол</p>
              <DropdownInput
                itemsList={aboba}
                inputType="text"
                inputPlaceholder="Выберите пол"
                inputName="gesssnder"
              />
            </div>
            <div className="gender__block">
              <p className="data__title">Пол</p>
              <DropdownInput
                itemsList={aboba}
                inputType="text"
                inputPlaceholder="Выберите пол"
                inputName="gender"
              />
            </div>
            <div className="country__block">
              <p className="data__title">Страна и город</p>
              <SelectCountryCity />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Учебные заведения",
      key: "education",
      html: (
        <div className="pa__content-wrapper">
          <div className="pa__title">
            <h5 className="pa__h5">Учебные заведения</h5>
            {mobileVersionMenu && (
              <Button onClick={courseMenuClick} buttonTxt="Меню" />
            )}
          </div>
          <div className="teach-place">
            <div className="teach-place__block">
              <p className="data__title">Учебное заведение</p>
              <DropdownInput
                itemsList={aboba2}
                inputPlaceholder="Выберите заведение"
                inputName="teach-place"
              />
            </div>
            <div className="teach-place__block">
              <p className="data__title">Факультет</p>
              <DropdownInput
                itemsList={aboba3}
                inputPlaceholder="Выберите факультет"
                inputName="fakultet"
              />
            </div>
            <div className="teach-place__block">
              <p className="data__title">Факультет</p>
              <DropdownInput
                itemsList={aboba3}
                inputPlaceholder="Выберите факультет"
                inputName="fakssultet"
              />
            </div>
            <div className="teach-place__block">
              <p className="data__title">Курс</p>
              <input placeholder="1" type="number" className="data-inputs" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Сменить пароль",
      html: (
        <div>
          <div className="pa__content-wrapper">
            <h5 className="pa__h5">Учебные заведения</h5>
            {mobileVersionMenu && (
              <Button onClick={courseMenuClick} buttonTxt="Меню" />
            )}
          </div>
          <div className="teach-place">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
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
                  <span className="error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const newWidth = entries[0].contentRect.width;
        setWidth(newWidth);

        // Проверяем, когда ширина контейнера равна или больше 1200px
        if (newWidth >= 1200) {
          setMobileVersionMenu(false);
        } else {
          setMobileVersionMenu(true);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current); // Начинаем отслеживание
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current); // Очищаем отслеживание при размонтировании
      }
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    setCourseMenu(!courseMenu);
  };

  return (
    <div className="main pa-main">
      <div className="pa__block">
        <div ref={containerRef} className="container">
          <div className="pa__wrapper">
            {mobileVersionMenu ? (
              <AnimatePresence>
                {courseMenu ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="pa__list"
                  >
                    {content.map((item, index) => (
                      <button
                        className={
                          activeIndex === index
                            ? "pa__list-item active"
                            : "pa__list-item"
                        }
                        key={item.id}
                        onClick={() => handleClick(index)}
                      >
                        {item.id}
                      </button>
                    ))}
                    <Button onClick={courseMenuClick} buttonTxt="Назад" />
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            ) : (
              <div className="pa__list">
                {content.map((item, index) => (
                  <button
                    className={
                      activeIndex === index
                        ? "pa__list-item active"
                        : "pa__list-item"
                    }
                    key={item.id}
                    onClick={() => handleClick(index)}
                  >
                    {item.id}
                  </button>
                ))}
              </div>
            )}

            <div className="pa__content">
              <AnimatePresence>
                {activeIndex !== null && (
                  <motion.div
                    key={content[activeIndex].key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {content[activeIndex].html}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
