import React, { Component } from "react";
import RegistrationForm from "../RegistrationForm";

export default class EmployerPromo extends Component {
  render() {
    return (
      <div id="promo" className="main__promo employer-promo">
        <div ref={this.containerRef} className="container">
          <div className="promo__wrapper">
            <div className="promo__block employer-promo__block">
              <div className="employer-promo__txt">
                <h1>Уважаемый работодатель!</h1>
                <h5>
                  Добро пожаловать на нашу страницу регистрации! Пожалуйста,
                  заполните необходимые поля, чтобы начать процесс регистрации.
                </h5>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
