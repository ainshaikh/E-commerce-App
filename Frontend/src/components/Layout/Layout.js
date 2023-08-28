import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import  { Toaster } from 'react-hot-toast';


const Layout = ({children, description, keywords, author, title}) => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "78vh" }}>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;


Layout.defaultProps = {
  description: "Mern-Stack Project",
  keywords: "Fashion, clothing, Branded, Shoes",
  author: "AinInfotech",
  title: "Ecommerce-Website",
}