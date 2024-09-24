import React from "react";
import ReactDOM from "react-dom/client";
import PromoItem from "./PromoItem";
import { motion } from "framer-motion";

class MainPromo extends React.Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      mobileVersion: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (this.containerRef.current) {
      const containerWidth = this.containerRef.current.offsetWidth;
      if (containerWidth <= 768) {
        this.setState({ mobileVersion: true });
      } else {
        this.setState({ mobileVersion: false });
      }
    }
  }

  render() {
    const { mobileVersion } = this.state;

    if (!mobileVersion) {
      return (
        <div id="promo" className="main__promo">
          <div ref={this.containerRef} className="container">
            <div className="promo__wrapper">
              <div className="promo__block">
                <h1>KOZHURA SCHOOL открывает двери в будущее строительства!</h1>
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
      );
    } else {
      return (
        <div className="main__promo">
          <div ref={this.containerRef} className="container">
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
}

export default MainPromo;
