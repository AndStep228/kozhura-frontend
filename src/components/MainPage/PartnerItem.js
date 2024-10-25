import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion"; // Импортируем motion
import YtVideo from "../YtVideo";
import Button from "../Button";

export default function PartnerItem(props) {
  const {
    TabletWrap,
    MobileWrap,
    LeftFlow,
    PartnerImg,
    PartnerImgAlt,
    PartnerVideoLink,
    PartnerTitle,
    PartnerSubtitle,
  } = props;

  // Определяем класс для блока партнеров с использованием classNames
  const blockClass = classNames("partners__block", {
    "left-wrap": LeftFlow,
  });

  // Массив данных для кнопок, чтобы избежать дублирования
  const buttons = [
    { btnLink: "/library", buttonTxt: "Все курсы" },
    { btnLink: "/library", buttonTxt: "Полный курс" },
    { btnLink: "/library", buttonTxt: "Базовый курс" },
  ];

  // Анимационные варианты
  const variantsXMinus = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsXPlus = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsYMinus = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsYPlus = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Компонент для отображения кнопок с анимацией
  const RenderButtons = () => (
    <div className="info__btns">
      {buttons.map((btn, index) => (
        <motion.div
          key={index}
          variants={variantsYMinus}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4 + index * 0.2,
          }} // Задержка для последовательного появления
        >
          <Button
            isPageLink={true}
            btnLink={btn.btnLink}
            buttonTxt={btn.buttonTxt}
          />
        </motion.div>
      ))}
    </div>
  );

  // Компонент для отображения промо блока с анимацией
  const Promo = (
    <>
      {LeftFlow ? (
        <motion.div
          className="partners__promo"
          variants={variantsXPlus}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }} // Первая задержка
        >
          <img src={PartnerImg} alt={PartnerImgAlt} />
          <motion.div
            className="promo__video"
            variants={variantsXPlus}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }} // Вторая задержка
          >
            <YtVideo videoLink={PartnerVideoLink} />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="partners__promo"
          variants={variantsXMinus}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }} // Первая задержка
        >
          <img src={PartnerImg} alt={PartnerImgAlt} />
          <motion.div
            className="promo__video"
            variants={variantsXMinus}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }} // Вторая задержка
          >
            <YtVideo videoLink={PartnerVideoLink} />
          </motion.div>
        </motion.div>
      )}
    </>
  );

  // Компонент для отображения информационного блока с анимацией
  const Info = (
    <motion.div
      className="partners__info"
      variants={variantsYPlus}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} // Задержка для заголовков
    >
      <h2>{PartnerTitle}</h2>
      <h5>{PartnerSubtitle}</h5>
      {/* Отображаем кнопки внутри info, только если не TabletWrap и не MobileWrap */}
      {!(TabletWrap || MobileWrap) && <RenderButtons />}
    </motion.div>
  );

  return (
    <div className={blockClass}>
      {/* Определяем порядок отображения promo и info на основе LeftFlow */}
      {LeftFlow ? (
        <>
          {Info}
          {Promo}
        </>
      ) : (
        <>
          {Promo}
          {Info}
        </>
      )}

      {/* Отображаем кнопки отдельно, если TabletWrap или MobileWrap */}
      {(TabletWrap || MobileWrap) && <RenderButtons />}
    </div>
  );
}
