import React from "react";
import Button from "../Button";

export default function CoursePage({ mobileVersionMenu, courseMenuClick }) {
  return (
    <div className="pa__content-wrapper">
      <div className="pa__title">
        <h5 className="pa__h5">Мои курсы</h5>
        {mobileVersionMenu && (
          <Button onClick={courseMenuClick} buttonTxt="Меню" />
        )}
      </div>
      <div className="my-course__block">
        <div className="my-course__item">
          {/* <img className="my-course__item-bkg" src="" alt="" /> */}
          <div className="my-course__item-info">
            <h5>Системы фасадные с наружными штукатурными слоями</h5>
            <Button isPageLink={true} buttonTxt="Перейти к обучению" />
            <div className="my-course__detail">
              <div className="detail__item">
                <h5>Разделы</h5>
                <h2>5</h2>
                <img src="/img/PersonalAccount/razdel.svg" alt="" />
              </div>
              <div className="detail__item">
                <h5>Разделы</h5>
                <h2>5</h2>
                <img src="/img/PersonalAccount/razdel.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
