import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageBanner from "../../components/PageBanner/PageBanner";
import Promote from "../../components/Promote/Promote";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <PageBanner pagebanner="What We Offer" />
      <Services />
      <Promote promote="Best IT service provide company in Bangladesh" />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Service;
