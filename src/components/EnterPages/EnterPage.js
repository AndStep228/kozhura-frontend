import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import DefaultEnterPage from "./DefaultEnterPage";
import ForgotPassEnterPage from "./ForgotPassEnterPage";
import RegistrationEnterPage from "./RegistrationEnterPage";

export default function EnterPage() {
  const [forgotPass, setForgotPass] = useState(false);
  const [regForm, setRegForm] = useState(false);
  const forgotPassPress = () => {
    setForgotPass(!forgotPass);
  };

  const regFormPress = () => {
    setForgotPass(false);
    setRegForm(!regForm);
  };
  return (
    <div id="promo" className="main__promo enter-promo">
      <div className="container">
        <div className="promo__wrapper">
          {!forgotPass && !regForm && (
            <DefaultEnterPage
              regFormClick={regFormPress}
              forgotPassClick={forgotPassPress}
            />
          )}
          {forgotPass && !regForm && (
            <ForgotPassEnterPage
              regFormClick={regFormPress}
              forgotPassClick={forgotPassPress}
            />
          )}
          {!forgotPass && regForm && (
            <RegistrationEnterPage
              regForm={regForm}
              regFormClick={regFormPress}
            />
          )}
        </div>
      </div>
    </div>
  );
}
