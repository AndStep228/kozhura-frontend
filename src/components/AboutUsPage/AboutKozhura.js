import React, { Component } from "react";
import PageTitle from "../PageTitle";

export default class AboutKozhura extends Component {
  render() {
    return (
      <div className="about-kozhura">
        <div className="container">
          <PageTitle lineUnable={true} PageTitle="О компании KOZHURA" />
          <div className="about-kozhura__block">
            <div className="kozhura-description">
              <h1>
                Компания KOZHURA - занимается изучением и внедрением
                инструментов в сфере BIM, VR, AR
              </h1>
              <img src="/img/AboutUs/kozhura-description-img.jpg" alt="" />
            </div>
            <div className="kozhura-specialization">
              <h1>
                Наша специализация проектирование и строительство объектов с
                использованием BIM-технологий
              </h1>
              <img src="/img/AboutUs/kozhura-specialization.jpg" alt="" />
            </div>
            <div className="work-process">
              <h1>
                Это позволяет совместно работать архитекторам, инженерам,
                подрядчикам и управляющей компании
              </h1>
              <img src="/img/AboutUs/work-process-1.png" alt="" />
              <img src="/img/AboutUs/work-process-2.png" alt="" />
              <img src="/img/AboutUs/work-process-3.png" alt="" />
              <img src="/img/AboutUs/work-process-4.png" alt="" />
            </div>
            <div className="work-cycles">
              <h1>
                А также повышать эффективность и качество проектов на всех
                этапах жизненного цикла.
              </h1>
              <div className="cycles__block">
                <div className="cycles__item">
                  <div className="cycles__img">
                    <img src="/img/AboutUs/cycles-1.svg" alt="" />
                  </div>
                  <div className="cycles__txt">
                    <h1>01</h1>
                    <h5>Составление ТЗ</h5>
                  </div>
                </div>
                <div className="cycles__item">
                  <div className="cycles__img">
                    <img src="/img/AboutUs/cycles-2.svg" alt="" />
                  </div>
                  <div className="cycles__txt">
                    <h1>02</h1>
                    <h5>Разработка документации</h5>
                  </div>
                </div>
                <div className="cycles__item">
                  <div className="cycles__img">
                    <img src="/img/AboutUs/cycles-3.svg" alt="" />
                  </div>
                  <div className="cycles__txt">
                    <h1>03</h1>
                    <h5>Работа конструкторского отдела</h5>
                  </div>
                </div>
                <div className="cycles__item">
                  <div className="cycles__img">
                    <img src="/img/AboutUs/cycles-4.svg" alt="" />
                  </div>
                  <div className="cycles__txt">
                    <h1>04</h1>
                    <h5>Строительство на объекте</h5>
                  </div>
                </div>
                <div className="cycles__item">
                  <div className="cycles__img">
                    <img src="/img/AboutUs/cycles-5.svg" alt="" />
                  </div>
                  <div className="cycles__txt">
                    <h1>05</h1>
                    <h5>Передача проекта заказчику</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
