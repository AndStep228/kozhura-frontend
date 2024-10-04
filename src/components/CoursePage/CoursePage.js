import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import FormBlock from "../FormBlock";
import { useParams } from "react-router-dom";

export default function CoursePage({ setGlobalLoading }) {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.dev.kozhura.school/api/courses/courses/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [setGlobalLoading]);

  if (loading) {
    return <div>Загрузка...</div>; // Показываем индикатор загрузки
  }

  if (error) {
    return <div>Ошибка: {error}</div>; // Показываем сообщение об ошибке
  }

  // Ищем нужный курс
  const course = courses.find((course) => course.id === parseInt(id));

  // Проверка на существование курса
  if (!course) {
    return <div>Курс не найден</div>; // Показываем сообщение, если курс не найден
  }

  return (
    <div className="main course-main">
      <div className="course-page">
        <div className="container">
          <div className="course-page__wrapper">
            <div className="course__promo">
              <h1>{course.name}</h1>
              <h5>{course.about}</h5>
              <img src={course.image} alt="course-image" />
            </div>
            <div className="course__line"></div>
            <div className="course__about">
              {Object.keys(course.about_block).map((key) => (
                <div key={key} className="about__item">
                  <h1>{course.about_block[key].block_name}</h1>
                  <h5>{course.about_block[key].block_text}</h5>
                </div>
              ))}
            </div>
            <PageTitle lineUnable={true} PageTitle="Спикеры" />
            <div className="course__speackers">
              {Object.keys(course.speakers).map((key) => (
                <div key={key} className="speackers__item">
                  <img src={course.speakers[key].image} alt="speaker" />
                  <p className="speacker__name">{course.speakers[key].name}</p>
                  <p className="speacker__txt">
                    {course.speakers[key].profession}
                  </p>
                </div>
              ))}
            </div>
            <PageTitle lineUnable={true} PageTitle="Программа курса" />
            <div className="course__program">
              <div className="program__item">
                <h1>1.</h1>
                <h4>Регистрация. Начало курса</h4>
                <div className="course__line"></div>
              </div>
              {Object.keys(course.program_units).map((key, index) => (
                <div key={key} className="program__item">
                  <h1>{index + 2 + "."}</h1>
                  <h4>{course.program_units[key].text}</h4>
                  <p className="program__speacker">
                    {course.program_units[key].speaker}
                  </p>
                  <div className="course__line"></div>
                </div>
              ))}
            </div>
            <PageTitle lineUnable={true} PageTitle="Что вы приобретете" />
            <div className="course__wrapper">
              <h5>{course.skills}</h5>
              <div className="course__skills">
                {Object.keys(course.skills_from_process).map((key) => (
                  <div key={key} className="skills__item">
                    <img
                      src={course.skills_from_process[key].image}
                      alt="skills"
                    />
                    <div className="skill__desc">
                      <h5 className="skill__title">
                        {course.skills_from_process[key].name}
                      </h5>
                      <h5 className="skill__subtitle">
                        {course.skills_from_process[key].about}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FormBlock />
      </div>
    </div>
  );
}
