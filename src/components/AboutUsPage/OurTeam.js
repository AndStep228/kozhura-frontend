import React, { Component } from "react";
import TeamMate from "./TeamMate";
import PageTitle from "../PageTitle";

export default class OurTeam extends Component {
  render() {
    return (
      <div className="our-team">
        <div className="container">
          <PageTitle PageTitle="Наша команда" lineUnable={true} />
          <div className="our-team__block">
            <TeamMate
              teamMateImg="/img/AboutUs/mate-1.jpg"
              teamMateTitle="Емельянов Алексей"
              teamMateSubTitle="Генеральный директор"
            />
            <TeamMate
              teamMateImg="/img/AboutUs/mate-2.jpg"
              teamMateTitle="Безверхая Полина"
              teamMateSubTitle="Ведущий инженер"
            />
            <TeamMate
              teamMateImg="/img/AboutUs/mate-3.jpg"
              teamMateTitle="Михайлов Антон"
              teamMateSubTitle="BIM - мастер"
            />
            <TeamMate
              teamMateImg="/img/AboutUs/mate-6.jpg"
              teamMateTitle="Власов Николай"
              teamMateSubTitle="Руководитель конструкторского отдела"
            />
            <TeamMate
              teamMateImg="/img/AboutUs/mate-4.jpg"
              teamMateTitle="Капустин Андрей"
              teamMateSubTitle="Программист - разработчик"
            />
            <TeamMate
              teamMateImg="/img/AboutUs/mate-5.jpg"
              teamMateTitle="Паньков Михаил"
              teamMateSubTitle="BIM - менеджер"
            />
          </div>
        </div>
      </div>
    );
  }
}
