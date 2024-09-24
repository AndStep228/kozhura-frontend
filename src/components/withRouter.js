import React from "react";
import { useLocation } from "react-router-dom";

// Обертка, которая передает location как пропс
export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  }

  return ComponentWithRouterProp;
};
