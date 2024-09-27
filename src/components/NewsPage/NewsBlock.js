import React, { useState } from "react";
import NewsItem from "./NewsItem";
import NewsModal from "./NewsModal";

export default function NewsBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);

  const elements = [
    {
      id: 1,
      title:
        'Группа компаний "Сибирские Фасады" приняла участие в ежегодной встрече партнёров',
      texts: [
        "05.04.2024",
        'Группа компаний "Сибирские Фасады" приняла участие в ежегодной встрече партнёров HILTI FACADE CONNECT 2024 в качестве основных спикеров',
      ],
      images: [
        "/img/News/news-1(1).png",
        "/img/News/news-1(2).png",
        "/img/News/news-1(3).png",
        "/img/News/news-1(4).png",
        "/img/News/news-1(5).png",
        "/img/News/news-1(6).png",
        "/img/News/news-1(7).png",
        "/img/News/news-1(8).png",
        "/img/News/news-1(9).png",
      ],
    },
    {
      id: 2,
      title:
        "Сегодня была проведена встреча с высшим колледжем информатики при НГУ.",
      texts: [
        "28.03.2024",
        "Сегодня была проведена встреча с высшим колледжем информатики при НГУ, на встрече обсуждались ближайшие перспективы и активно развивающиеся направления в строительной отрасли касательно BIM проектирования. На встрече были студенты из разных направлений, во время встречи были объявлены основные направления и их задачи",
      ],
      images: ["/img/News/news-2(1).png"],
    },
    {
      id: 3,
      title: "Открыли новостной портал для наших работодателей",
      texts: [
        "06.03.2024",
        "Запустили в тестовом режиме страницу регистрации для Партнеров школы и компании работодателей. Здесь можно разместить объявления о наборе слушателей школы для прохождения практики в нашей компании, вакансию для новых сотрудников или заметку о новой информации на нашей странице.",
      ],
      images: ["/img/News/news-3(1).png"],
    },
  ];

  const openModal = (content) => {
    setCurrentContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContent(null);
  };

  return (
    <div className="news-page__wrapper">
      <div className="news-page__block">
        <div className="news__block">
          {elements.map((element) => (
            <NewsItem
              key={element.id}
              newsImg={element.images[0]}
              newsDate={element.texts[0]}
              newsTitle={element.title}
              onClick={() => openModal(element)}
            />
          ))}
        </div>
        <NewsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={currentContent}
        />
        <div className="news-info__block">
          <div className="news-info__item">
            <h5>Заметки</h5>
            <ul>
              <li>Не опаздывать на совещание</li>
              <li>Быть добрым всегда и не выносить агрессию на других</li>
            </ul>
          </div>
          <div className="news-info__item">
            <h5>Информация</h5>
            <ul>
              <li>
                В пятницу 08.03.2024 пройдет совещание на проверку результатов
                за 3 дня работы.
              </li>
              <li>Скоро нам пришлют документы для вставки нашего проекта.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
