import React, { Component } from "react";
import PageTitle from "../PageTitle";

import NewsSlider from "./NewsSlider";
import NewsItem from "./NewsItem";

export default class NewsPage extends Component {
  render() {
    return (
      <div className="main news-main">
        <div className="news-page">
          <div className="container">
            <PageTitle lineUnable={true} PageTitle="Новости" />
            <div className="news-page__wrapper">
              <div className="news-page__block">
                <div className="news__block">
                  <NewsItem
                    newsImg="/img/news-1.png"
                    newsDate="05.04.2024"
                    newsTitle='Группа компаний "Сибирские Фасады" приняла участие в ежегодной встрече партнёров'
                  />
                  <NewsItem
                    newsImg="/img/news-2.png"
                    newsDate="28.03.2024"
                    newsTitle="Сегодня была проведена встреча с высшим колледжем информатики при НГУ."
                  />
                  <NewsItem
                    newsImg="/img/news-3.png"
                    newsDate="06.03.2024"
                    newsTitle="Открыли новостной портал для наших работодателей"
                  />
                </div>
                <div className="news-info__block">
                  <div className="news-info__item">
                    <h5>Заметки</h5>
                    <ul>
                      <li>Не опаздывать на совещание</li>
                      <li>
                        Быть добрым всегда и не выносить агрессию на других
                      </li>
                    </ul>
                  </div>
                  <div className="news-info__item">
                    <h5>Информация</h5>
                    <ul>
                      <li>
                        В пятницу 08.03.2024 пройдет совещание на проверку
                        результатов за 3 дня работы.
                      </li>
                      <li>
                        Скоро нам пришлют документы для вставки нашего проекта.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <PageTitle lineUnable={true} PageTitle="Новое" />
            <NewsSlider />
          </div>
        </div>
      </div>
    );
  }
}
