import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationContext } from "../AnimationContext";
import { AuthContext } from "../AuthContext";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function HeaderPCourse() {
  const { shouldAnimate } = useContext(AnimationContext);
  const [didBurgerPressed, setDidBurgerPressed] = useState(false);
  const [didLoginPressed, setDidLoginPressed] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Вы действительно хотите выйти?");
    if (confirmLogout) {
      logout();
      navigate("/enter-page"); // Перенаправляем на страницу логина
    }
  };

  const variantsYMinus = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsXOpacity = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 0.5, x: 0 },
  };

  const variantsXMinus = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsXPlus = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const headerLinks = [
    { LinkTxt: "О нас", Link: "/about-us", delay: 0 },
    { LinkTxt: "Библиотека", Link: "/library", delay: 0.1 },
    { LinkTxt: "Новости", Link: "/news", delay: 0.2 },
    { LinkTxt: "Работодатель", Link: "/employer", delay: 0.2 },
  ];

  const [didBurgerTrue, setDidBurgerTrue] = useState(true);

  const resetBurgerState = () => {
    setDidBurgerPressed(false);
    document.body.style.overflow = "";
  };

  const burgerPressed = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const newState = !didBurgerPressed;
    setDidBurgerPressed(newState);

    if (containerWidth <= 768 && newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const loginPressed = () => {
    setDidLoginPressed(!didLoginPressed);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", resetBurgerState);
    };
  }, []);

  useEffect(() => {
    resetBurgerState();
  }, [location]);

  return (
    <motion.header id="header" className="header header-p-course">
      <div ref={containerRef} className="header__block">
        <motion.div
          variants={variantsXMinus}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "backInOut" }}
        >
          <HeaderLogo LogoLink="/" Logo="/img/kozhura_white.svg" />
        </motion.div>
        <div className="mobile-header__links">
          <HeaderLink LinkImg="/img/header_login.svg" onClick={loginPressed} />
          <AnimatePresence mode="wait">
            {didLoginPressed && (
              <motion.div
                key="loginMenu"
                className="login__wrapper"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "backInOut" }}
              >
                <div onClick={loginPressed} className="login__block">
                  <Link to="/personal-account">Настройки</Link>
                  <Button onClick={handleLogout} buttonTxt="Выйти" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <HeaderLink
            didBurgerPressed={didBurgerPressed}
            onClick={burgerPressed}
            IsBurger={true}
          />
        </div>
      </div>
      <motion.div
        variants={variantsXOpacity}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        className="header__line"
      ></motion.div>
      {didBurgerTrue && (
        <AnimatePresence mode="wait">
          {didBurgerPressed && (
            <motion.div
              key="burgerMenu"
              className="burger__wrapper"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6, ease: "backInOut" }}
            >
              <HeaderMenu
                onClick={resetBurgerState}
                className="burger__block"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
}
