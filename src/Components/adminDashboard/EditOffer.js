import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { ref, get, update } from "firebase/database";

const EditOffer = () => {
  const { offerId } = useParams();

  const id = Number(offerId) - 1;

  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [expiryDate, setExpirydate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    get(ref(db, "offers/" + id))
      .then((snapShot) => {
        if (snapShot.exists()) {
          setService(snapShot.val().service);
          setServiceId(snapShot.val().serviceId);
          setDescription(snapShot.val().description);
          setExpirydate(snapShot.val().expiryDate);
        } else {
          console.log("snapshot is not available");
        }
      })
      .catch((err) => alert("Error", err.msg));
  }, []);

  const updateData = (e) => {
    e.preventDefault();

    update(ref(db, "offers/" + id), {
      service,
      serviceId,
      description,
      expiryDate,
    })
      .then(() => {
        alert("Data updated Successfully !");
        navigate("/adminPanel/offersCrud");
      })
      .catch((err) => alert("Error", err.msg));
  };

  return (
    <div className="col-12">
    <form onSubmit={updateData} className='add-form'>
        <h3>Edit Data</h3>
        <input
            className='form-control'
            type="text"
            name="serviceName"
            value={service}
            readOnly
            
        />
        <div>&nbsp;</div>
        <input
            className='form-control'
            type="text"
            name="serviceId"
            value={serviceId}
            readOnly
        />
        <div>&nbsp;</div>
        <textarea
            className='form-control'
            type="text"
            name="descp"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
        />
        <div>&nbsp;</div>
        <input
            className='form-control'
            type="date"
            name="descp"
            value={expiryDate}
            placeholder="Quote"
            onChange={(e) => setExpirydate(e.target.value)}
        />
        <div>&nbsp;</div>
        <input
            type="submit"
            value="Update"
            className="btn btn-secondary"
        />
    </form>
</div>
  );
};

export default EditOffer;
