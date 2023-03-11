import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Promote from "../../components/Promote/Promote";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <WhoWeAre />
      <Promote promote="One stop digital marketing agency in Bangladesh" />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
