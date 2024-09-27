import React from "react";
import PageTitle from "../PageTitle";
import FormBlock from "../FormBlock";

export default function CoursePage() {
  return (
    <div className="main course-main">
      <div className="course-page">
        <div className="container">
          <div className="course-page__wrapper">
            <div className="course__promo">
              <h1>КУРС ПО РАЗДЕЛУ НФС</h1>
              <h5>
                Этот курс посвящен изучению основ создания, установки и
                использования разнообразных навесных фасадов с применением
                новейших технологий BIM. Он предназначен для тех, кто хочет
                научиться работать с навесными фасадами различных видов и
                конструкций.
              </h5>
              <img src="/img/LibraryPage/fs.jpeg" alt="" />
            </div>
            <div className="course__line"></div>
            <div className="course__about">
              <div className="about__item">
                <h1>Что это за курс</h1>
                <h5>
                  На курсе вы узнаете, какие виды навесных фасадов существуют,
                  какие преимущества и недостатки они имеют, как выбирать
                  подходящие материалы и крепежные элементы, как рассчитывать
                  нагрузки и деформации, как выполнять монтаж и демонтаж
                  навесных фасадов, как обеспечивать их тепло- и звукоизоляцию,
                  вентиляцию и гидроизоляцию
                </h5>
              </div>
              <div className="about__item">
                <h1>Для кого этот курс</h1>
                <h5>
                  Курс рассчитан на инженеров, архитекторов, дизайнеров и
                  менеджеров, имеющих базовые знания по строительству и BIM и
                  желающих повысить свою квалификацию в области навесных
                  фасадных систем. Курс по навесным фасадным системам в BIM
                  среде поможет вам стать профессионалом в этой сфере и
                  реализовать свои творческие идеи.
                </h5>
              </div>
              <div className="about__item">
                <h1>Что будет на курсе</h1>
                <h5>
                  На курсе вы изучите теорию и практику создания, установки и
                  использования разнообразных навесных фасадов с применением
                  новейших технологий BIM. Вы также выполните проектную работу,
                  в которой примените полученные знания и навыки на реальном
                  объекте
                </h5>
              </div>
              <div className="about__item">
                <h1>Кто будет выступать</h1>
                <h5>
                  Каждый год мы приглашаемых лучших экспертов в разделе НФС и
                  смежных дисциплинах. Своим опытом поделятся успешные коучи и
                  специалисты в данной сфере от ведущих компаний.
                </h5>
              </div>
            </div>
            <PageTitle lineUnable={true} PageTitle="Спикеры" />
            <div className="course__speackers">
              <div className="speackers__item">
                <img src="/img/AboutUs/mate-1.jpg" alt="" />
                <p className="speacker__name">Емельянов Алексей</p>
                <p className="speacker__txt">
                  Соучредитель и руководитель службы проектирования
                </p>
              </div>
              <div className="speackers__item">
                <img src="/img/AboutUs/mate-5.jpg" alt="" />
                <p className="speacker__name">Михаил Паньков</p>
                <p className="speacker__txt">BIM-менеджер</p>
              </div>
              <div className="speackers__item">
                <img src="/img/AboutUs/mate-6.jpg" alt="" />
                <p className="speacker__name">Николай Власов</p>
                <p className="speacker__txt">
                  Руководитель конструкторского отдела
                </p>
              </div>
              <div className="speackers__item">
                <img src="/img/Course/mate-7.jpg" alt="" />
                <p className="speacker__name">Тильга Дмитрий</p>
                <p className="speacker__txt">Главный конструктор</p>
              </div>
            </div>
            <PageTitle lineUnable={true} PageTitle="Программа круса" />
            <div className="course__program">
              <div className="program__item">
                <h1>1.</h1>
                <h4>Регистрация. Начало курса</h4>
                <div className="course__line"></div>
              </div>
              <div className="program__item">
                <h1>2.</h1>
                <h4>
                  Контроль качества и сроков выполнения проектов по навесным
                  фасадам с использованием BIM-технологий
                </h4>
                <p className="program__speacker">
                  Алексей Емельянов, соучредитель и руководитель службы
                  проектирования
                </p>
                <div className="course__line"></div>
              </div>
              <div className="program__item">
                <h1>3.</h1>
                <h4>
                  УРОК-1: “Обзор современных видов и конструкций навесных
                  фасадов
                </h4>
                <p className="program__speacker">Дмитрий Ошейко, ГИП</p>
                <div className="course__line"></div>
              </div>
              <div className="program__item">
                <h1>4.</h1>
                <h4>УРОК-2: "Расчет нагрузок и деформаций навесных фасадов"</h4>
                <p className="program__speacker">
                  Тильга Дмитрий, главный конструктор
                </p>
                <div className="course__line"></div>
              </div>
              <div className="program__item">
                <h1>5.</h1>
                <h4>Проектирование навесных фасадов в BIM-среде</h4>
                <p className="program__speacker">
                  Паньков Михаил, BIM-менеджер
                </p>
                <div className="course__line"></div>
              </div>
              <div className="program__item">
                <h1>6.</h1>
                <h4>
                  Координация работы специалистов по навесным фасадам в
                  BIM-среде
                </h4>
                <p className="program__speacker">
                  Николай Власов, Руководитель конструкторского отдела
                </p>
                <div className="course__line"></div>
              </div>
            </div>
            <PageTitle lineUnable={true} PageTitle="Что вы приобретете" />
            <div className="course__wrapper">
              <h5>
                Курс по навесным фасадным системам поможет вам повысить свой
                профессиональный уровень и стать востребованным специалистом на
                рынке строительных услуг
              </h5>
              <div className="course__skills">
                <div className="skills__item">
                  <img src="/img/Course/skills-1.jpg" alt="" />
                  <div className="skill__desc">
                    <h5 className="skill__title">Опыт экспертов индустрии</h5>
                    <h5 className="skill__subtitle">
                      Спикеры поделятся реальными проектами и актуальными
                      инструментами работы с проектами
                    </h5>
                  </div>
                </div>
                <div className="skills__item">
                  <img src="/img/Course/skills-1.jpg" alt="" />
                  <div className="skill__desc">
                    <h5 className="skill__title">Опыт экспертов индустрии</h5>
                    <h5 className="skill__subtitle">
                      Спикеры поделятся реальными проектами и актуальными
                      инструментами работы с проектами
                    </h5>
                  </div>
                </div>
                <div className="skills__item">
                  <img src="/img/Course/skills-1.jpg" alt="" />
                  <div className="skill__desc">
                    <h5 className="skill__title">Опыт экспертов индустрии</h5>
                    <h5 className="skill__subtitle">
                      Спикеры поделятся реальными проектами и актуальными
                      инструментами работы с проектами
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormBlock />
      </div>
    </div>
  );
}
