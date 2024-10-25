// CoursePage.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import useWindowWidth from "./useWindowWidth";

const modulesData = [
  {
    id: 1,
    name: "1. Крепеж",
    lectures: [
      {
        id: "1.1",
        name: "1.1 Основы анкерной техники",
        videoUrl: "https://www.youtube.com/embed/KxGOvpmcw4U",
      },
      {
        id: "1.2",
        name: "1.2 Типы крепежа",
        videoUrl: "https://www.youtube.com/embed/VndUGwijY84",
      },
    ],
  },
  {
    id: 2,
    name: "2. Инструменты",
    lectures: [
      {
        id: "2.1",
        name: "2.1 Обзор инструментов",
        videoUrl: "https://www.youtube.com/embed/KxGOvpmcw4U",
      },
    ],
  },
];

function CoursePage() {
  const [selectedLecture, setSelectedLecture] = useState(
    modulesData[0].lectures[0]
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const handleLectureSelect = (lecture) => {
    setSelectedLecture(lecture);
    if (windowWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (windowWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  return (
    <div className="course-p-page">
      <Sidebar
        modules={modulesData}
        onLectureSelect={handleLectureSelect}
        selectedLecture={selectedLecture}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <ContentArea lecture={selectedLecture} />
    </div>
  );
}

export default CoursePage;
