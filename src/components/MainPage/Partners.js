import React, { Component, useEffect, useState } from "react";
import PartnerItem from "./PartnerItem";
import PageTitle from "../PageTitle";

export default class Partners extends Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      tabletWrap: false,
      mobileWrap: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  handleResize() {
    if (this.containerRef.current) {
      const containerWidth = this.containerRef.current.offsetWidth;
      if (containerWidth <= 1083) {
        this.setState((prevState) => ({
          tabletWrap: (prevState.tabletWrap = true),
        }));
        this.setState((prevState) => ({
          mobileWrap: (prevState.mobileWrap = false),
        }));
      } else {
        this.setState((prevState) => ({
          tabletWrap: (prevState.tabletWrap = false),
        }));
        this.setState((prevState) => ({
          mobileWrap: (prevState.mobileWrap = false),
        }));
      }

      if (containerWidth <= 768) {
        this.setState((prevState) => ({
          mobileWrap: (prevState.mobileWrap = true),
        }));
        this.setState((prevState) => ({
          tabletWrap: (prevState.tabletWrap = false),
        }));
      } else {
        this.setState((prevState) => ({
          mobileWrap: (prevState.mobileWrap = false),
        }));
      }
    }
  }

  render() {
    const { tabletWrap } = this.state;
    const { mobileWrap } = this.state;
    return (
      <div className="partners">
        <div ref={this.containerRef} className="container">
          <PageTitle PageTitle="Курсы от наших партнеров" />
          <div className="partners__wrapper">
            <PartnerItem
              TabletWrap={tabletWrap}
              MobileWrap={mobileWrap}
              LeftFlow={false}
              PartnerImg="/img/sib-facades.svg"
              PartnerImgAlt="sib-facades"
              PartnerVideoLink="https://www.youtube.com/embed/XluzrSHBJg4"
              PartnerTitle="ООО “Сибирские Фасады” — производственно-строительная компания, реализующая жилые, административные и инфраструктурные проекты"
              PartnerSubtitle="Основная сфера деятельности – оболочки зданий (светопрозрачные конструкции, навесные фасады)"
            />
            <div className="partners__line"></div>
            <PartnerItem
              TabletWrap={tabletWrap}
              MobileWrap={mobileWrap}
              LeftFlow={true}
              PartnerImg="/img/hilti.svg"
              PartnerImgAlt="hilti"
              PartnerVideoLink="https://www.youtube.com/embed/t09FYW7kct0"
              PartnerTitle="Hilti - это мировой лидер в разработке и производстве передовых технологий, программного обеспечения и услуг для профессионалов строительной отрасли"
              PartnerSubtitle=""
            />
            <div className="partners__line"></div>

            <PartnerItem
              TabletWrap={tabletWrap}
              MobileWrap={mobileWrap}
              LeftFlow={true}
              PartnerImg="/img/schuco.svg"
              PartnerImgAlt="schuco"
              PartnerVideoLink="https://www.youtube.com/embed/JNGheowgRtw"
              PartnerTitle="Schuco - ведущий поставщик высококачественных оконных, дверных и фасадных систем из алюминия и стали"
              PartnerSubtitle="Продукция Schuco отвечает самым высоким стандартам с точки зрения дизайна, комфорта, безопасности и энергоэффективности."
            />
            <div className="partners__line"></div>
            <PartnerItem
              TabletWrap={tabletWrap}
              MobileWrap={mobileWrap}
              LeftFlow={false}
              PartnerImg="/img/AGC.svg"
              PartnerImgAlt="AGC"
              PartnerVideoLink="https://www.youtube.com/embed/2BACwLhMd-w"
              PartnerTitle="AGC – мировой лидер в производстве стекла для архитектурно-строительного и автомобильного применения."
              PartnerSubtitle="AGC Glass Russia входит в состав компании AGC Glass Europe – европейского подразделения AGC Inc."
            />
          </div>
        </div>
      </div>
    );
  }
}
