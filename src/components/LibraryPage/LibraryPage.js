import React from "react";
import ReactDOM from "react-dom/client";
import LibraryItem from "./LibraryItem";

class LibraryPage extends React.Component {
  render() {
    return (
      <div className="main library-main">
        <div className="container">
          <div className="library__block">
            <LibraryItem
              courseImg="/img/fs.jpeg"
              courseTitle="Фасадные системы"
              courseSubTitle="СП 522.1325800.2023"
              courseDesc="Системам фасадных навесных вентилируемых. Правила проектирования, производства работ и эксплуатации"
              secondBtn={true}
              coursePDFLink="https://www.minstroyrf.gov.ru/upload/iblock/16c/pl703f5bdhhewkbh5j32aamfqq1cuokz/SP-522.pdf"
            />
            <div className="library__line"></div>
            <LibraryItem
              courseImg="/img/spk.jpeg"
              courseTitle="Свето-прозрачные конструкции"
              courseSubTitle="СП 426.1325800"
              courseDesc="Конструкции ограждающие светопрозрачные зданий и сооружений. Правила проектирования"
              secondBtn={true}
              coursePDFLink="https://www.minstroyrf.gov.ru/upload/iblock/b61/SP-426.pdf"
            />
            <div className="library__line"></div>
            <LibraryItem
              courseImg="/img/sfnh.jpeg"
              courseTitle="Системы фасадные с наружными штукатурными слоями"
              courseSubTitle="СП 293.1325800.2017"
              courseDesc="Системы фасадные теплоизоляционные композиционные с наружными штукатурными слоями. Правила проектирования и производства работ"
              secondBtn={true}
              coursePDFLink="https://www.minstroyrf.gov.ru/upload/iblock/64f/sistemy-fasadnye-so-shtukaturnymi-sloyami.pdf"
            />
            <div className="library__line"></div>
            <LibraryItem
              courseImg="/img/hilti-course.jpg"
              courseTitle="Курс по крепежным системам HILTI"
              courseDesc="Компания активно работает в области улучшения энергоэффективности и устойчивости строительных конструкций, предлагая инновационные решения и материалы."
              secondBtn={false}
            />
            <div className="library__line"></div>
            <LibraryItem
              courseImg="/img/schuco-course.jpg"
              courseTitle="Курс по CПК от компании SHUECO"
              courseDesc="Курс по конструкциям фасадным светопрозрачным предназначен для тех, кто хочет изучить основы проектирования, монтажа и эксплуатации светопрозрачных фасадов с использованием современных технологий BIM."
              secondBtn={false}
            />
            <div className="library__line"></div>
            <LibraryItem
              courseImg="/img/cerezit-course.jpg"
              courseTitle="Курс по СФТК от компании ЦЕРЕЗИТ"
              courseDesc="Данный курс научит вас: Использовать библиотеку семейств CERESIT для выбора и вставки материалов в модели, а также редактирования их параметров. Создавать спецификации и сметы с помощью встроенных инструментов Revit."
              secondBtn={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LibraryPage;
