import React, { Component } from "react";
import PageTitle from "../PageTitle";
import NewsBlock from "./NewsBlock";
import NewsSlider from "./NewsSlider";

export default class NewsPage extends Component {
  render() {
    return (
      <div className="main news-main">
        <div className="news-page">
          <div className="container">
            <PageTitle lineUnable={true} PageTitle="Новости" />
            <NewsBlock />
            <PageTitle lineUnable={true} PageTitle="Новое" />
            <NewsSlider />
          </div>
        </div>
      </div>
    );
  }
}
