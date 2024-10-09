import React, { useState, useEffect, useRef, useContext } from "react";
import PromoItem from "./PromoItem";
import { motion } from "framer-motion";
import { AnimationContext } from "../AnimationContext";

function MainPromo() {
  const [mobileVersion, setMobileVersion] = useState(false);
  const containerRef = useRef(null);

  const { shouldAnimate } = useContext(AnimationContext);

  const variantsYPlus = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsYMinus = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleResize = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      if (containerWidth <= 768) {
        setMobileVersion(true);
      } else {
        setMobileVersion(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Инициализируем при монтировании

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mobileVersion) {
    return (
      <div id="promo" className="main__promo">
        <div ref={containerRef} className="container">
          <div className="promo__wrapper">
            <div className="promo__block">
              <motion.h1
                variants={variantsYMinus}
                initial="hidden"
                whileInView={shouldAnimate ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "backInOut", delay: 0 }}
              >
                KOZHURA SCHOOL открывает двери в будущее строительства!
              </motion.h1>
              <motion.div
                variants={variantsYPlus}
                initial="hidden"
                whileInView={shouldAnimate ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "backInOut", delay: 0 }}
              >
                <PromoItem
                  ItemTitle="Теория"
                  ItemSubtitle="Современные технологии строительства, BIM-моделирование, автоматизация, VR/AR в проектировании."
                />
              </motion.div>
              <motion.div
                variants={variantsYPlus}
                initial="hidden"
                whileInView={shouldAnimate ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "backInOut", delay: 0.1 }}
              >
                <PromoItem
                  ItemTitle="Практика"
                  ItemSubtitle="Реализация проектов с использованием передовых технологий и практические занятия на производстве."
                />
              </motion.div>
              <motion.div
                variants={variantsYPlus}
                initial="hidden"
                whileInView={shouldAnimate ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
              >
                <PromoItem
                  ItemTitle="Стажировка"
                  ItemSubtitle="Работа с реальными проектами и компаниями, участие в стажировках на базе крупных строительных и фасадных предприятий."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main__promo">
        <div ref={containerRef} className="container">
          <div className="promo__wrapper">
            <div className="promo__block">
              <h1>KOZHURA SCHOOL открывает двери в будущее строительства!</h1>
              <div className="promo__items-list">
                <PromoItem
                  ItemTitle="Теория"
                  ItemSubtitle="Современные технологии строительства, BIM-моделирование, автоматизация, VR/AR в проектировании."
                />
                <PromoItem
                  ItemTitle="Практика"
                  ItemSubtitle="Реализация проектов с использованием передовых технологий и практические занятия на производстве."
                />
                <PromoItem
                  ItemTitle="Стажировка"
                  ItemSubtitle="Работа с реальными проектами и компаниями, участие в стажировках на базе крупных строительных и фасадных предприятий."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPromo;
