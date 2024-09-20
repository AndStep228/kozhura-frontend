import React from "react";
import ReactDOM from "react-dom/client";
import MainPromo from "./MainPromo";
import Header from "../Header/Header";
import Partners from "./Partners";
import FormBlock from "./FormBlock";

class MainPage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />

        <MainPromo />
        <div className="main">
          <Partners />
          <FormBlock />
        </div>
      </div>
    );
  }
}

export default MainPage;
