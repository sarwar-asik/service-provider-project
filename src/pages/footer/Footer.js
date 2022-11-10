import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import useTitle from "../../myhooks/useTitle";

const Footer = () => {
  useTitle('Footer')

    
  return (
    <div className="row  bg-secondary py-5 mx-auto text-light">

      <div className="col-sm-6 col-6 col-md-4 col-lg-4 mx-auto">
        <h1 className="text-warning">PERSONAL TOUR SERVICE  </h1>
       <h6> I service about tour related. <br /> This is my personal service . <br /> I service to my customer with cordially . </h6>
      </div>

     
      <div className="col-sm-6 col-6 col-md-4 col-lg-4 mx-auto ">
        <ul className="">
          <h4 className="text-warning">My Services</h4>
          <li>Tour Visa Collect </li>
          <li> Flight Booking </li>
          <li> Ready PassPort </li>
          <li> Experience Guide </li>
          <li> Home Delivery </li>

        </ul>
      </div>
      <div className="col-sm-6 col-6 col-md-4 col-lg-4 mx-auto my-2 p-3">
      <h3 className="text-warning"> Contact me</h3>
      <p className="d-flex gap-3 fs-2 mt-3 ">

        <FaFacebook className="fs-1 rounded m-1" style={{'backgroundColor':'#3b5998'}} > 
        </FaFacebook>
       
          <FaGoogle className="fs-1 rounded m-1"></FaGoogle>
        
    
        <FaGithub className="fs-1 rounded m-1"   style={{'backgroundColor':'#333333'}}></FaGithub>
      </p>

      </div>

    </div>
  );
};

export default Footer;
