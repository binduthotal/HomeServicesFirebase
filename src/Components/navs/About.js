import React from "react";
import { img1 } from "./images";
import { NavLink } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BreadCrumbs from "./BreadCrumbs";

const About = () => {
  return (
    <div className="body-container aboutUs-container">

      <div className="breadcrumb-block">
        <BreadCrumbs name="About" />
        {/* <h1>About</h1> */}
      </div>

      <div className="container">
        {/* Who we are */}
        <h2>
          <strong>Who we are</strong>
        </h2>
        <div className="row">
          <div className="col-12 aboutUs-col-p">
            <h3 style={{ textAlign: "center", paddingBottom: "20px" }}>
              Home Services
            </h3>
            <p>
              <strong>Home Services</strong> is a technology platform offering a
              variety of services at home. Customers use our platform to book
              services such as beauty treatments, haircuts, massage therapy,
              cleaning, plumbing, carpentry, appliance repair, painting etc.
              These services are delivered in the comfort of their home and at a
              time of their choosing. We promise our customers a high quality,
              standardised and reliable service experience. To fulfill this
              promise, we work closely with our hand-picked service partners,
              enabling them with technology, training, products, tools,
              financing, insurance and brand, helping them succeed and deliver
              on this promise.
            </p>
          </div>
        </div>

        {/* Vision */}
        <h2>
          <strong>Vision</strong>
        </h2>
        <div className="row">
          <div className="col-6">
            <p className="aboutUs-vision-p">
              At Home Services, our vision is to transform houses into homes by
              providing exceptional and reliable home services that cater to
              every aspect of your living space. We believe that a
              well-maintained and comfortable home is the cornerstone of a happy
              and fulfilling life. With this principle in mind, we have set out
              on a mission to redefine the way you experience and interact with
              home services.
            </p>

            <p className="aboutUs-vision-p">
              <strong>Elevating Home Care: </strong>Our vision is to elevate the
              concept of home care to a level beyond expectations. We aim to be
              your trusted partner in every step of your home maintenance
              journey, ensuring that your living space remains a haven of
              comfort and tranquility.
            </p>

            <p className="aboutUs-vision-p">
              <strong>Professionalism and Expertise: </strong>We envision a
              world where professional expertise meets personalized care. Our
              team of skilled technicians and service providers are dedicated to
              delivering top-tier solutions, backed by years of experience and
              continuous training. Whether it's plumbing, electrical work,
              cleaning, or any other service, we are committed to excellence in
              every task we undertake.
            </p>

            <p className="aboutUs-vision-p">
              <strong>Innovation and Convenience:</strong>
              We envision a world where professional expertise meets
              personalized care. Our team of skilled technicians and service
              providers are dedicated to delivering top-tier solutions, backed
              by years of experience and continuous training. Whether it's
              plumbing, electrical work, cleaning, or any other service, we are
              committed to excellence in every task we undertake.
            </p>

          </div>
          <div className="col-6">
            <img src={img1} alt="" className="aboutUs-img1" />
          </div>
        </div>



        {/* Mission */}
        <h2>
          <strong>Mission</strong>
        </h2>
        <div className="row">
          <div className="col-12 aboutUs-col-p">
            <p style={{ marginBottom: "0" }}>
              Our mission in home services is to make every house a better home.
              Through skilled expertise and personalized care, we aim to provide
              homeowners with reliable solutions that enhance their living
              spaces. We strive to create a seamless experience, offering
              top-quality services that contribute to the comfort,
              functionality, and overall well-being of every household we serve.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}

        <h2>
          <strong>Why choose us</strong>
        </h2>
        <div className="row">
          <div className="col-4">
            <div className="circle-text rounded-circle">
              <h3 className="aboutUs-col-4-h3 ">
                <ConstructionIcon color="primary" sx={{ fontSize: 60 }} />
              </h3>
            </div>
            <div className="aboutUs-col-p">
              <h4>Around-the-Clock Assistance</h4>
              <p>
                Our 24/7 service, we provide reliable support whenever you need
                it, ensuring your home remains safe and comfortable around the
                clock.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="circle-text rounded-circle">
              <h3 className="aboutUs-col-4-h3 ">
                <VerifiedIcon color="primary" sx={{ fontSize: 60 }} />
              </h3>
            </div>
            <div className="aboutUs-col-p">
              <h4>Expertise You Can Trust Our Services</h4>
              <p>
                Our seasoned professionals bring years of experience to every
                project, ensuring top-tier results that stand the test of time.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="circle-text rounded-circle">
              <h3 className="aboutUs-col-4-h3 ">
                <AccessTimeIcon color="primary" sx={{ fontSize: 60 }} />
              </h3>
            </div>
            <div className="aboutUs-col-p">
              <h4>Reliability and Peace of Mind</h4>
              <p>
                With our proven track record of excellence, you can count on us
                for dependable solutions that keep your home running smoothly.
              </p>
            </div>
          </div>
        </div>
        <h6>
          Welcome to a new standard of home services—where expertise meets care,
          and your home becomes our shared journey. Feel free to customize and
          modify this content to match your company's values, mission, and the
          specific services you offer.
        </h6>
      </div>
      {/* Container */}
    </div>
  );
}

export default About;
