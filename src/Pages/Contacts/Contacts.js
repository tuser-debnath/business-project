import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageBanner from "../../components/PageBanner/PageBanner";
import Contact from "../../components/Contact/Contact";

const Contacts = () => {
  return (
    <>
      <HeaderTwo />
      <PageBanner pagebanner="Feel Free To Contact Us" />
      <Contact />
      <Footer />
    </>
  );
};

export default Contacts;
