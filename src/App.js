import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import ScrollToTop from "./components/ScrollToTop";
import { withRouter } from "./components/withRouter";
import { AnimatePresence, motion } from "framer-motion";
import LibraryPage from "./components/LibraryPage/LibraryPage";
import NewsPage from "./components/NewsPage/NewsPage";

class App extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div className="wrapper">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Header key="header" />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <MainPage />
                </PageWrapper>
              }
            />
            <Route
              path="about-us"
              element={
                <PageWrapper>
                  <AboutUsPage />
                </PageWrapper>
              }
            />
            <Route
              path="library"
              element={
                <PageWrapper>
                  <LibraryPage />
                </PageWrapper>
              }
            />
            <Route
              path="news"
              element={
                <PageWrapper>
                  <NewsPage />
                </PageWrapper>
              }
            />
          </Routes>
          <Footer key="footer" />
        </AnimatePresence>
      </div>
    );
  }
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Начальная позиция (вне экрана)
      animate={{ opacity: 1 }} // Анимация при входе (появление на экране)
      exit={{ opacity: 0 }} // Анимация при выходе (уходит за экран)
      transition={{ duration: 0.3 }} // Время анимации
    >
      {children}
    </motion.div>
  );
};

// Оборачиваем App с помощью withRouter для передачи location
export default withRouter(App);
