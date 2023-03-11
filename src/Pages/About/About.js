import React from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageBanner from "../../components/PageBanner/PageBanner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Success from "../../components/Success/Success";
import MissionVision from "../../components/MissionVision/MissionVision";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <PageBanner pagebanner="About RoseTheme" />
      <WhoWeAre />
      <Success />
      <MissionVision />
      <Footer />
    </>
  );
};

export default About;
