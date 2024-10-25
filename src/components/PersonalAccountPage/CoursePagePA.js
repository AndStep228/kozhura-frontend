import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import Button from "../Button";

export default function CoursePage({ mobileVersionMenu, courseMenuClick }) {
  const [courses, setCourses] = useState({});
  const { userData, authToken, setUserData } = useContext(AuthContext);
  const userId = userData?.pk;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `https://api.dev.kozhura.school/api/courses/user/${userId}/`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCourses(data.courses);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    if (authToken && userId) {
      fetchCourses();
    }
  }, [authToken, userId]);

  const coursesArray = Object.entries(courses).map(
    ([courseName, courseData]) => ({
      name: courseName,
      ...courseData,
    })
  );

  return (
    <div className="pa__content-wrapper">
      <div className="pa__title">
        <h5 className="pa__h5">Мои курсы</h5>
        {mobileVersionMenu && (
          <Button onClick={courseMenuClick} buttonTxt="Меню" />
        )}
      </div>
      <div className="my-course__block">
        {coursesArray.length > 0 ? (
          coursesArray.map((course) => (
            <div className="my-course__item" key={course.id}>
              {/* <img className="my-course__item-bkg" src="" alt="" /> */}
              <div className="my-course__item-info">
                <h5>{course.name}</h5>
                <Button
                  isPageLink={true}
                  btnLink={`/p-course/${course.id}`}
                  buttonTxt="Перейти к обучению"
                />
                <div className="my-course__detail">
                  <div className="detail__item">
                    <h5>Разделов пройдено</h5>
                    <h2>{course.result}</h2>
                    <img src="/img/PersonalAccount/razdel.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Загрузка курсов...</p>
        )}
      </div>
    </div>
  );
}
