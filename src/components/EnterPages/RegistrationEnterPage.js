import React, { useContext, useState } from "react";
import "react-phone-input-2/lib/style.css";

import RegistrationForm from "../RegistrationForm";

export default function ForgotPassEnterPage({ regFormClick, regForm }) {
  return <RegistrationForm regForm={regForm} regFormClick={regFormClick} />;
}
