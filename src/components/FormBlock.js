import React, { Component, useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm";

export default class FormBlock extends Component {
  render() {
    return (
      <div className="form__wrapper">
        <div className="container">
          <div className="form__block">
            <div className="form__txt">
              <h1>
                Мы готовим специалистов на лидирующие позиции рынка труда.
              </h1>
              <h5>
                Присоединяйся к нам и будь конкурентоспособным с первого дня
                обучения!
              </h5>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    );
  }
}
