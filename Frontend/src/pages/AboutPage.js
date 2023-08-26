import React from "react";
import Layout from "../components/Layout/Layout";
import aboutImage from "../images/aboutus.jpg";

const AboutPage = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={aboutImage} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h2>About Our E-Commerce Store</h2>
          <p className="text-justify mt-2">
          <ul>
          <li>
            Welcome to our online store! We are your one-stop destination for
            all your shopping needs. With a wide range of products across
            various categories, we aim to provide you with a seamless shopping
            experience right from the comfort of your home.
            </li>
            <br/>
            <li>
            Our mission is to offer high-quality products at competitive prices,
            ensuring that you get the best value for your money. Whether you're
            looking for the latest fashion trends, electronics, home essentials,
            or more, you'll find a diverse selection of products that cater to
            your needs and preferences.
            </li>
            <br />
            <li>
            We value your trust in us, and that's why we continuously work to
            improve and innovate. Our commitment to quality, convenience, and
            reliability drives us to be your preferred online shopping platform.
            Thank you for choosing us and being a part of our journey.
            </li>
            <br />
            
            Happy Shopping!
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
