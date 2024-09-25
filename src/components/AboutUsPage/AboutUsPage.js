import React from "react";
import ReactDOM from "react-dom/client";
import AboutPromo from "./AboutPromo";
import TeachPrograms from "./TeachPrograms";
import CompanyAbout from "./CompanyAbout";
import AboutKozhura from "./AboutKozhura";
import OurTeam from "./OurTeam";

class AboutUsPage extends React.Component {
  render() {
    return (
      <>
        <AboutPromo />
        <div className="main about-main">
          <CompanyAbout />
          <TeachPrograms />
          <AboutKozhura />
          <OurTeam />
        </div>
      </>
    );
  }
}

export default AboutUsPage;
