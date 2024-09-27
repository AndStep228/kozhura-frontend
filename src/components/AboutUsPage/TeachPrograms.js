import React, { Component } from "react";
import TeachProgramsItem from "./TeachProgramsItem";

export default class TeachPrograms extends Component {
  render() {
    return (
      <div className="teach-programs">
        <div className="container">
          <div className="teach-programs__wrapper">
            <TeachProgramsItem
              programTitle="Наши учебные программы включают теорию"
              programSubtitle="Основы строительных технологий и проектирования."
              programTwoSubtitle="BIM-моделирование и автоматизация процессов."
              leftWrap={false}
              programImg="/img/AboutUs/teach-programs-1.jpg"
            />
            <TeachProgramsItem
              programTitle="Практические задания, основанные на реальных проектах"
              programSubtitle="Разработка проектов зданий и сооружений с использованием BIM-технологий."
              programTwoSubtitle="Моделирование строительных процессов в VR/AR средах."
              programThreeSubtitle="Создание рабочих чертежей и технической документации."
              leftWrap={true}
              programImg="/img/AboutUs/teach-programs-2.jpg"
            />
            <TeachProgramsItem
              programTitle="А также стажировки в крупнейших строительных организациях."
              programSubtitle="Участие в строительных проектах ведущих компаний."
              programTwoSubtitle="Практическая работа на реальных строительных объектах."
              programThreeSubtitle="Совместные проекты с профессиональными архитекторами и инженерами."
              leftWrap={false}
              programImg="/img/AboutUs/teach-programs-3.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}
