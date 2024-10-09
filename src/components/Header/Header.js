import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationContext } from "../AnimationContext";
import { AuthContext } from "../AuthContext";

function Header() {
  const { shouldAnimate } = useContext(AnimationContext);
  const [didBurgerPressed, setDidBurgerPressed] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

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
  ];

  const [didBurgerTrue, setDidBurgerTrue] = useState(false);

  const handleResize = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setDidBurgerTrue(containerWidth <= 1200);
    }
  };

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", resetBurgerState);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", resetBurgerState);
    };
  }, []);

  useEffect(() => {
    resetBurgerState();
  }, [location]);

  const headerClass = (() => {
    if (location.pathname === "/personal-account") {
      return "header header-pa";
    } else if (
      !["/", "/about-us", "/enter-page", "/employer"].includes(
        location.pathname
      )
    ) {
      return "header header-bkg";
    } else {
      return "header";
    }
  })();

  return (
    <motion.header id="header" className={headerClass}>
      <div ref={containerRef} className="container">
        <div className="header__block">
          <motion.div
            variants={variantsXMinus}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "backInOut" }}
          >
            <HeaderLogo LogoLink="/" Logo="/img/kozhura_white.svg" />
          </motion.div>
          <div className="header-links">
            {!didBurgerTrue ? (
              headerLinks.map(({ LinkTxt, Link, delay }, index) => (
                <motion.div
                  key={index}
                  variants={variantsYMinus}
                  initial="hidden"
                  animate={shouldAnimate ? "visible" : "hidden"}
                  transition={{ duration: 1, ease: "backInOut", delay }}
                >
                  <HeaderLink LinkTxt={LinkTxt} Link={Link} />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={variantsXPlus}
                initial="hidden"
                animate={shouldAnimate ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "backInOut" }}
              >
                <HeaderLink
                  didBurgerPressed={didBurgerPressed}
                  onClick={burgerPressed}
                  IsBurger={true}
                />
              </motion.div>
            )}
          </div>
          {!didBurgerTrue && (
            <div className="header-ex-links">
              {!isAuthenticated ? (
                <>
                  <motion.div
                    variants={variantsYMinus}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{ duration: 1, ease: "backInOut", delay: 0.4 }}
                  >
                    <HeaderLink LinkTxt="Работодатель" Link="/employer" />
                  </motion.div>
                  <motion.a
                    variants={variantsYMinus}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
                    className="header-links__item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://kozhura-nsk.tilda.ws/"
                  >
                    KOZHURA_BIM
                  </motion.a>
                  <motion.div
                    variants={variantsYMinus}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{ duration: 1, ease: "backInOut", delay: 0.6 }}
                  >
                    <HeaderLink LinkImg="/img/header_youtube.svg" />
                  </motion.div>
                </>
              ) : (
                <HeaderLink LinkTxt="Логин" Link="/personal-account" />
              )}
            </div>
          )}
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

export default Header;
