import React , { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { backgroundImg1 } from "./images";
import {db} from '../FirebaseConfig';
import {ref, get} from 'firebase/database'

const Home = () => {

  const [servicesData, setServicesData] = useState([])
  const [offersData, setOffersData] = useState([])
  
  useEffect(() =>{
    get(ref(db))
    .then((snapShot) => {
      console.log(snapShot.val())
      setServicesData(snapShot.val().services);
      setOffersData(snapShot.val().offers);
    })
  },[])

  return (
    <div className="body-container home-container">

      {/* Top Title Heading/ Image */}
      <NavLink to="./about" className="link">
        <div className="welcome-bg-img">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-center">
              <p>Home Services</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="bg-img" src={backgroundImg1} alt="" />
            </div>
          </div>
        </div>
      </NavLink>

      {/* Offers */}
      <div className="offers">
        <h1>Offers for You</h1>
        {offersData.map((offer) => {
          return (
            <div className="offers-box" key={offer.id}>
              <NavLink
                className="link"
                to={`/OnClickServiceBooking/${offer.serviceId}`}
              >
                <p>{offer.description}</p>
                <p>
                  <strong>Will expire on : </strong>
                  {offer.expiryDate}
                </p>
                <p>Grab the deal!!</p>
              </NavLink>
            </div>
          );
        })}
      </div>

      {/* Welcome Intro Paragraph */}
      <div className="intro">
        <h1>Welcome to Home Services</h1>
        <div className="intro-content">
          <p>
            Welcome to our <strong>Home Services</strong>! We specialize in
            turning houses into homes through our top-notch home improvement
            services. Our skilled professionals cover everything from minor fixes
            to major renovations, all designed to make your living space more
            comfortable and visually appealing. With a focus on quality
            craftsmanship, personalized solutions, and an array of offerings
            including repairs, renovations, landscaping, and interior design,
            we're dedicated to meeting your unique needs. Let us partner with you
            in creating a home that's not only functional but also a true
            reflection of your style. Contact us today to explore the
            possibilities!
          </p>
          <p>At our company, we're dedicated
            to making your home a better place. Whether you need repairs,
            renovations, or routine maintenance, we're here to help you create a
            comfortable and beautiful living space. Our team of skilled
            professionals is committed to delivering top-notch services that
            exceed your expectations.</p>
        </div>

      </div>

      {/* 1st Booking Offer */}
      <div className="first-booking" >
        <div className="booking-box">
          <p>10% off on first booking!!!</p>
          <p>Grab the deal!!!</p>
          <NavLink to="/bookaService"><button type="button" className="btn btn-secondary btn-">Book Your Service</button></NavLink>
        </div>
      </div>

      {/* Services */}
      <div className="list">
        <h1>Services We Provide</h1>
        <div className="row ">
          {
            servicesData.map(services => {
              return (
                <div className='col-lg-3 col-md-3 col-sm-6  d-flex justify-content-center text-center' key={services.id}>
                  <div className='service-list  d-flex justify-content-center text-center' >
                    <NavLink className="service-list-navlink" to={`/OnClickServiceBooking/${services.id}`} ><p >{services.name}</p></NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>



    </div>
  );
}

export default Home;
