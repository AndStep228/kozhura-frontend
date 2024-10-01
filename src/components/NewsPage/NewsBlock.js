import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import NewsModal from "./NewsModal";

export default function NewsBlock({ setGlobalLoading }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [information, setInformation] = useState([]);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.dev.kozhura.school/api/other_pages/news/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    fetch("https://api.dev.kozhura.school/api/other_pages/information_block/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        setInformation(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [setGlobalLoading]);

  if (loading) {
    return <div>Загрузка...</div>; // Показываем индикатор загрузки
  }

  if (error) {
    return <div>Ошибка: {error}</div>; // Показываем сообщение об ошибке
  }

  if (!news && !information) {
    return <div>Новостей нет</div>; // Показываем сообщение, если курс не найден
  }

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
          {news.map((new_item) => (
            <NewsItem
              key={new_item.id}
              newsImg={new_item.images[0]}
              newsDate={new_item.news_date}
              newsTitle={new_item.news_title}
              onClick={() => openModal(new_item)}
            />
          ))}
        </div>
        <NewsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={currentContent}
        />
        <div className="news-info__block">
          {information.map((info_item) => (
            <div key={info_item.id} className="news-info__item">
              <h5>{info_item.information_title}</h5>
              <ul>
                {info_item.id !== 1 ? (
                  <>
                    <li>
                      Скоро нам пришлют документы для вставки нашего проекта.
                    </li>
                    <li>
                      В пятницу 08.03.2024 пройдет совещание на проверку
                      результатов за 3 дня работы.
                    </li>
                  </>
                ) : (
                  <>
                    <li>Не опаздывать на совещание</li>
                    <li>Быть добрым всегда и не выносить агрессию на других</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
