import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу наверх
  }, [pathname]); // Выполняется каждый раз при изменении пути

  return null;
};

export default ScrollToTop;
