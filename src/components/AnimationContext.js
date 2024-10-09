import React, { createContext, useState } from "react";

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <AnimationContext.Provider value={{ shouldAnimate, setShouldAnimate }}>
      {children}
    </AnimationContext.Provider>
  );
};
