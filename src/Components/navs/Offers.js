import React, { useEffect, useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import { NavLink } from "react-router-dom"; 
import {db} from '../FirebaseConfig';
import { ref, get, child, DataSnapshot } from 'firebase/database'

const Offers = () => {

  const [offersData, setOffersData] = useState([]);

  useEffect(()=> {
    get(ref(db,'offers/'))
    .then((snapShot) => {
      if(snapShot.exists()) {
        console.log(snapShot.val())
        setOffersData(snapShot.val())
      }
    })
  },[])


  return (
    <div className="body-container offers-container">
      {/* BreadCrumbs */}
      <div className="breadcrumb-block">
        <BreadCrumbs name="Offers" />
        {/* <h1>Offers</h1> */}
      </div>

      <div className="container">
        <div className="row">
          {offersData.map((offer) => {
            return (

              <div className="col-6" key={offer.id}>
                <div className="offers-box">
                  <NavLink  className="link" to={`/OnClickServiceBooking/${offer.serviceId}`}>
                    <h5>{offer.service}</h5>
                    <p>{offer.description}</p>
                    <p>
                      <strong>Will expire on : </strong>
                      {offer.expiryDate}
                    </p>
                    <p>Grab the deal!!</p>
                  </NavLink>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Offers;

