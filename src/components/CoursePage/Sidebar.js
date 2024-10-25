import React from "react";
import Button from "../Button";

function Sidebar({
  modules,
  onLectureSelect,
  selectedLecture,
  isMenuOpen,
  toggleMenu,
}) {
  return (
    <>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="course-title">Курс от компании HILTI</div>
        <div className="modules">
          {modules.map((module) => (
            <div key={module.id} className="module">
              <div className="module-title">{module.name}</div>
              <div className="lectures">
                {module.lectures.map((lecture) => (
                  <div
                    key={lecture.id}
                    className={`lecture ${
                      selectedLecture.id === lecture.id ? "selected" : ""
                    }`}
                    onClick={() => onLectureSelect(lecture)}
                  >
                    {lecture.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        Меню
      </button>
    </>
  );
}

export default Sidebar;
