import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

// ШАПКА И ФУТЕР
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// СТРАНИЦЫ
const NewsPage = lazy(() => import("./components/NewsPage/NewsPage"));
const LibraryPage = lazy(() => import("./components/LibraryPage/LibraryPage"));
const CoursePage = lazy(() => import("./components/CoursePage/CoursePage"));
const EmployerPage = lazy(() =>
  import("./components/EmployerPage/EmployerPage")
);
const MainPage = lazy(() => import("./components/MainPage/MainPage"));
const AboutUsPage = lazy(() => import("./components/AboutUsPage/AboutUsPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true); // Состояние для прелоадера
  const location = useLocation(); // Отслеживание изменений маршрутов

  useEffect(() => {
    // Показываем прелоадер при изменении маршрута
    setIsLoading(true);

    // Отслеживаем полную загрузку всех элементов страницы
    const handlePageLoad = () => {
      // Задержка перед тем, как скрыть прелоадер (для плавного исчезновения)
      setTimeout(() => {
        setIsLoading(false); // Скрываем прелоадер после полной загрузки
      }, 1000); // Задержка в 1 секунду для плавности
    };

    // Ждем полной загрузки страницы
    if (document.readyState === "complete") {
      handlePageLoad(); // Если страница уже загружена
    } else {
      window.addEventListener("load", handlePageLoad); // Ждем полной загрузки
    }

    // Чистим слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="preloader"
          >
            <svg
              width="424"
              height="114"
              viewBox="0 0 424 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10.6046V0.203901L175.715 0.407838V10.6046L123.734 83.0017V65.2594L162.668 10.6046H0Z"
                fill="url(#paint0_linear_11_59)"
              />
              <path
                d="M424 114H123.734V103.395L175.715 30.9983V49.1484L136.984 103.395L424 103.191V114Z"
                fill="url(#paint1_linear_11_59)"
              />
              <path
                d="M0 21.0054V113.796H10.1923V78.5151L14.2692 74.0287L38.9346 113.796H51.3691L20.7923 64.6475L51.3691 21.0054H38.9346L10.1923 60.9767V21.0054H0Z"
                fill="url(#paint2_linear_11_59)"
              />
              <path
                d="M195.896 0H186.111V93.4026H195.896V72.601H227.288V93.4026H237.48V0H227.288V61.9964H195.896V0Z"
                fill="url(#paint3_linear_11_59)"
              />
              <path
                d="M248.081 0.407803H258.274V73.009C258.501 78.5925 263.092 83.0017 268.677 83.0017H279.267C284.818 83.0017 289.348 78.5604 289.461 73.009L289.258 0.407875H299.45V72.7415C299.45 84.1522 290.203 93.4025 278.798 93.4025H268.733C257.327 93.4025 248.081 84.1522 248.081 72.7415V0.407803Z"
                fill="url(#paint4_linear_11_59)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.0096 20.8015C70.6039 20.8015 61.3578 30.0517 61.3578 41.4624V93.1351C61.3578 104.546 70.6038 113.796 82.0096 113.796H93.2981C104.704 113.796 113.95 104.546 113.95 93.1351V41.4624C113.95 30.0517 104.704 20.8015 93.2981 20.8015H82.0096ZM103.146 93.4025C103.033 98.9541 98.502 103.395 92.9518 103.395H82.3539C76.8373 103.395 72.3654 98.9215 72.3654 93.4025V41.6029C72.3654 35.8587 77.0198 31.2022 82.7615 31.2022H92.5441C98.3195 31.2022 103.033 35.8259 103.146 41.6029V93.4025Z"
                fill="url(#paint5_linear_11_59)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M310.049 0H320.242L341.497 0.00082722C352.953 0.00082722 362.221 9.32936 362.149 20.79L361.954 52.3156C361.884 63.6761 352.657 72.8485 341.302 72.8485H341.281L361.827 93.4025H346.741L326.196 72.8485H320.242V93.4026H310.049V72.8485V61.9972V11.0132V0ZM320.242 11.0132V61.9972H340.905C347.108 59.4371 351.156 53.3863 351.156 46.6726V25.0905C351.156 19.1308 347.793 13.6819 342.466 11.0132H320.242Z"
                fill="url(#paint6_linear_11_59)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M403.145 0.407803C414.187 0.407803 423.206 9.07846 423.768 19.9858H423.797V93.4026H413.196V72.6012H382.212V93.4026H371.611V19.9858C372.173 9.07846 381.22 0.407803 392.263 0.407803H403.145ZM413.196 20.7987C413.082 15.2484 408.551 10.8085 403.002 10.8085H392.616C387.03 10.8085 382.439 15.2177 382.212 20.8015V59.7531V61.9964H413.196V20.7987Z"
                fill="url(#paint7_linear_11_59)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
            <span className="loader"></span>
          </motion.div>
        )}
      </AnimatePresence>
      <Suspense
        fallback={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="preloader"
          >
            <svg
              width="424"
              height="114"
              viewBox="0 0 424 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10.6046V0.203901L175.715 0.407838V10.6046L123.734 83.0017V65.2594L162.668 10.6046H0Z"
                fill="url(#paint0_linear_11_59)"
              />
              <path
                d="M424 114H123.734V103.395L175.715 30.9983V49.1484L136.984 103.395L424 103.191V114Z"
                fill="url(#paint1_linear_11_59)"
              />
              <path
                d="M0 21.0054V113.796H10.1923V78.5151L14.2692 74.0287L38.9346 113.796H51.3691L20.7923 64.6475L51.3691 21.0054H38.9346L10.1923 60.9767V21.0054H0Z"
                fill="url(#paint2_linear_11_59)"
              />
              <path
                d="M195.896 0H186.111V93.4026H195.896V72.601H227.288V93.4026H237.48V0H227.288V61.9964H195.896V0Z"
                fill="url(#paint3_linear_11_59)"
              />
              <path
                d="M248.081 0.407803H258.274V73.009C258.501 78.5925 263.092 83.0017 268.677 83.0017H279.267C284.818 83.0017 289.348 78.5604 289.461 73.009L289.258 0.407875H299.45V72.7415C299.45 84.1522 290.203 93.4025 278.798 93.4025H268.733C257.327 93.4025 248.081 84.1522 248.081 72.7415V0.407803Z"
                fill="url(#paint4_linear_11_59)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.0096 20.8015C70.6039 20.8015 61.3578 30.0517 61.3578 41.4624V93.1351C61.3578 104.546 70.6038 113.796 82.0096 113.796H93.2981C104.704 113.796 113.95 104.546 113.95 93.1351V41.4624C113.95 30.0517 104.704 20.8015 93.2981 20.8015H82.0096ZM103.146 93.4025C103.033 98.9541 98.502 103.395 92.9518 103.395H82.3539C76.8373 103.395 72.3654 98.9215 72.3654 93.4025V41.6029C72.3654 35.8587 77.0198 31.2022 82.7615 31.2022H92.5441C98.3195 31.2022 103.033 35.8259 103.146 41.6029V93.4025Z"
                fill="url(#paint5_linear_11_59)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M310.049 0H320.242L341.497 0.00082722C352.953 0.00082722 362.221 9.32936 362.149 20.79L361.954 52.3156C361.884 63.6761 352.657 72.8485 341.302 72.8485H341.281L361.827 93.4025H346.741L326.196 72.8485H320.242V93.4026H310.049V72.8485V61.9972V11.0132V0ZM320.242 11.0132V61.9972H340.905C347.108 59.4371 351.156 53.3863 351.156 46.6726V25.0905C351.156 19.1308 347.793 13.6819 342.466 11.0132H320.242Z"
                fill="url(#paint6_linear_11_59)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M403.145 0.407803C414.187 0.407803 423.206 9.07846 423.768 19.9858H423.797V93.4026H413.196V72.6012H382.212V93.4026H371.611V19.9858C372.173 9.07846 381.22 0.407803 392.263 0.407803H403.145ZM413.196 20.7987C413.082 15.2484 408.551 10.8085 403.002 10.8085H392.616C387.03 10.8085 382.439 15.2177 382.212 20.8015V59.7531V61.9964H413.196V20.7987Z"
                fill="url(#paint7_linear_11_59)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_11_59"
                  x1="-1.71534e-06"
                  y1="73.6093"
                  x2="210.652"
                  y2="-155.727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
            <span className="loader"></span>
          </motion.div>
        }
      >
        <div className="wrapper">
          <ScrollToTop />

          <Header key="header" />

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="employer" element={<EmployerPage />} />
            <Route path="course/:id" element={<CoursePage />} />
          </Routes>
          <Footer key="footer" />
        </div>
      </Suspense>
    </>
  );
}

export default App;
