import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { AnimationContext } from "./components/AnimationContext";
import Preloader from "./components/Preloader";

// ШАПКА И ФУТЕР
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// СТРАНИЦЫ
const PersonalAccountPage = lazy(() =>
  import("./components/PersonalAccountPage/PersonalAccountPage")
);
const EnterPage = lazy(() => import("./components/EnterPages/EnterPage"));
const NewsPage = lazy(() => import("./components/NewsPage/NewsPage"));
const LibraryPage = lazy(() => import("./components/LibraryPage/LibraryPage"));
const CoursePage = lazy(() => import("./components/CoursePage/CoursePage"));
const EmployerPage = lazy(() =>
  import("./components/EmployerPage/EmployerPage")
);
const MainPage = lazy(() => import("./components/MainPage/MainPage"));
const AboutUsPage = lazy(() => import("./components/AboutUsPage/AboutUsPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { setShouldAnimate } = useContext(AnimationContext);

  useEffect(() => {
    setIsLoading(true);
    setShouldAnimate(false);

    const handlePageLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setShouldAnimate(true);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="wrapper">
        <Header key="header" />
        <Suspense fallback={<Preloader />}>
          <ScrollToTop />

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="enter-page" element={<EnterPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="personal-account" element={<PersonalAccountPage />} />
            <Route
              path="library"
              element={<LibraryPage setGlobalLoading={setIsLoading} />}
            />
            <Route
              path="news"
              element={<NewsPage setGlobalLoading={setIsLoading} />}
            />
            <Route path="employer" element={<EmployerPage />} />
            <Route
              path="course/:id"
              element={<CoursePage setGlobalLoading={setIsLoading} />}
            />
          </Routes>
          <Footer key="footer" />
        </Suspense>
      </div>
    </>
  );
}

export default App;
