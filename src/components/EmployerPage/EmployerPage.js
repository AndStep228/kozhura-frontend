import React, { Component } from "react";
import EmployerPromo from "./EmployerPromo";
import EmployerInfo from "./EmployerInfo";

export default class EmployerPage extends Component {
  render() {
    return (
      <>
        <EmployerPromo />
        <div className="main employer-main">
          <EmployerInfo />
        </div>
      </>
    );
  }
}
