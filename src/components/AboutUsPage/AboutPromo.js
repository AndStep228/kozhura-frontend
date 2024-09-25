import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";

class AboutPromo extends React.Component {
  render() {
    return (
      <div id="promo" className="main__promo about-promo">
        <div ref={this.containerRef} className="container">
          <div className="promo__wrapper">
            <div className="promo__block about-promo__block">
              <div className="about-promo__txt">
                <h1>KOZHURA SCHOOL – это образовательный портал</h1>
                <h5>
                  пециализирующийся на обучении студентов в области
                  строительства и проектирования.
                </h5>
              </div>
              <img src="/img/about-promo__img.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPromo;
