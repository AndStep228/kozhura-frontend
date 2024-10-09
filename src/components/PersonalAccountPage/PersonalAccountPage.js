import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import SelectCountryCity from "../SelectCountryCity";

import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";
import ChangePasswordForm from "./ChangePasswordForm";
import CoursePage from "./CoursePage";
import EmployerForm from "./EmployerForm";

export default function PersonalAccountPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [courseMenu, setCourseMenu] = useState(false);
  const [mobileVersionMenu, setMobileVersionMenu] = useState(false);
  const containerRef = useRef(null);

  const courseMenuClick = () => {
    setCourseMenu(!courseMenu);
  };

  const content = [
    {
      id: "Мои курсы",
      key: "courses",
      component: (
        <CoursePage
          mobileVersionMenu={mobileVersionMenu}
          courseMenuClick={courseMenuClick}
        />
      ),
    },
    {
      id: "Личные данные",
      key: "personal-data",
      component: (
        <PersonalDataForm
          mobileVersionMenu={mobileVersionMenu}
          courseMenuClick={courseMenuClick}
        />
      ),
    },
    {
      id: "Учебные заведения",
      key: "education",
      component: (
        <EducationForm
          mobileVersionMenu={mobileVersionMenu}
          courseMenuClick={courseMenuClick}
        />
      ),
    },
    {
      id: "Сменить пароль",
      key: "change-password",
      component: (
        <ChangePasswordForm
          mobileVersionMenu={mobileVersionMenu}
          courseMenuClick={courseMenuClick}
        />
      ),
    },
    {
      id: "Работодатель",
      key: "employer-pa",
      component: (
        <EmployerForm
          mobileVersionMenu={mobileVersionMenu}
          courseMenuClick={courseMenuClick}
        />
      ),
    },
  ];

  useEffect(() => {
    const currentContainer = containerRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const newWidth = entries[0].contentRect.width;

        if (newWidth >= 1200) {
          setMobileVersionMenu(false);
        } else {
          setMobileVersionMenu(true);
        }
      }
    });

    if (currentContainer) {
      resizeObserver.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        resizeObserver.unobserve(currentContainer);
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

            {activeIndex !== null && (
              <div className="pa__content" key={content[activeIndex].key}>
                {content[activeIndex].component}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
