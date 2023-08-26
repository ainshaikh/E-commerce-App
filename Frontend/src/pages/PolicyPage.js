import React from "react";
import Layout from "../components/Layout/Layout";
import privacyImage from "../images/privacy.jpg";

const PolicyPage = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={privacyImage} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p>
            Thank you for using E-commerce App. We are committed to protecting
            your privacy and ensuring the security of your personal information.
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your information when you use our App. By using the App,
            you consent to the practices described in this Privacy Policy.
          </p>
          <br />
          <p>
            <h3>Information We Collect</h3> <br />
            We may collect various types of information from and about users of
            our App, including:
          </p>
          <p>
            We may collect personal information such as your name, email
            address, postal address, phone number, and other contact details
            when you register for an account or make a purchase.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyPage;
