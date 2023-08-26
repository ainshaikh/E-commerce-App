import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import contactImage from '../images/contact-us-concept.jpg';


const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={contactImage}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className=" p-2 text-black text-center">CONTACT</h1>
          <p className="text-justify mt-2">
           For any query and information about the product, feel free to call anytime. We are available 24x7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0987654321
          </p>
          <p className="mt-3">
            <BiSupport /> : 180000-0000-0000 (toll free)
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact;