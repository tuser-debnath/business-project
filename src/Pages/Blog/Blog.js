import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageBanner from "../../components/PageBanner/PageBanner";
import Blogs from "../../components/Blogs/Blogs";

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <PageBanner pagebanner="Latest News" />
      <Blogs />
      <Footer />
    </>
  );
};

export default Blog;
