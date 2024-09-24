import React from "react";
import ReactDOM from "react-dom/client";
import MainPromo from "./MainPromo";
import Partners from "./Partners";
import FormBlock from "./FormBlock";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <MainPromo />
        <div className="main">
          <Partners />
          <FormBlock />
        </div>
      </>
    );
  }
}

export default MainPage;
