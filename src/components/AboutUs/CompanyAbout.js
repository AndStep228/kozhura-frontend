import React, { Component } from "react";

export default class CompanyAbout extends Component {
  render() {
    return (
      <div className="about-company">
        <div className="container">
          <div className="about-company__wrapper">
            <div className="company__block">
              <img src="/img/sib-facades-about.svg" />
              <img src="/img/schuco-about.svg" />
              <img src="/img/hilti-about.svg" />
              <img src="/img/agc-about.svg" />
            </div>
            <div className="about-company__block">
              <h1>
                Мы предоставляем доступ к курсам ведущих строительных компаний
              </h1>
              <h5>
                что позволяет нашим студентам осваивать передовые технологии и
                актуальные навыки, востребованные на рынке труда.
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
