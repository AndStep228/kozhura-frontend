import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import LibraryItem from "./LibraryItem";

function LibraryPage({ setGlobalLoading }) {
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

  if (error) {
    return <div>Ошибка: {error}</div>; // Показываем сообщение об ошибке
  }

  return (
    <div className="main library-main">
      <div className="container">
        <div className="library__block">
          {courses.map((course) => (
            <LibraryItem
              key={course.id}
              Link={`/course/${course.id}`}
              courseImg={course.image}
              courseTitle={course.name}
              courseSubTitle={course.code_name}
              courseDesc={course.about_on_library}
              secondBtn={true}
              coursePDFLink={course.pdf_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default LibraryPage;
