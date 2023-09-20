import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { ref, get, set, child, update } from 'firebase/database'

const AddOffer = () => {

  const [service, setServiceName] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [description, setDescription] = useState("");
  const [expiryDate, setExpirydate] = useState("");

  const [serviceData, setserviceData] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    get(ref(db,'services/'))
    .then((snapshot) =>{
      if (snapshot.exists()){
        setserviceData(snapshot.val())
      }
    })
    .catch((error) => console.error(error));
  },[])

  const postData = (e) => {
    e.preventDefault();

    // Get Keys from db
    get((ref(db, 'keys/')))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const offersKey = snapshot.val().offersKey;
          const id = snapshot.val().offersKey + 1;

          //   Add service data to db
          set(ref(db, 'offers/' + offersKey), {
            id,
            service,
            serviceId,
            description,
            expiryDate
          })
            .then(() => {
              alert("Offers Data added successfully!")
              setServiceName("")
              setServiceId("")
              setDescription("")
              setExpirydate("")
              // navigate("/adminPanel");
            })
            .catch(() => alert("Error : Offers Data Adding Failed"))
          //   Update service key value in keys from db
          update(ref(db, 'keys/'), {
            offersKey: snapshot.val().offersKey + 1,
          })
        }
        else {
          alert("Error : Offers Data Adding Failed")
        }

      })
      .catch((err) => alert("Error : Offers Data Adding Failed" + err.message))

  }

  const selectOnChangeHandler = (e) => {
    setServiceName(e.target.value)

    serviceData.map(service => {
      if (e.target.value === service.name) {
        setServiceId(service.id)
      }
      return null;
    })
  }

  return (
    <div className="col-12">
      <form onSubmit={postData} className="add-form">
        <h3>Add Offers Data</h3>
        <select
          className="form-select"
          id="validationDefault04"
          name="serviceName"
          value={service}
          required
          onChange={selectOnChangeHandler}
        >
          <option value="" disabled>
            Choose...
          </option>
          {serviceData.map((service) => {

            return (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            );

          })}
        </select>

        <div>&nbsp;</div>

        <input
          className="form-control"
          type="text"
          name="name"
          value={serviceId}
          placeholder="Service Id"
          readOnly
        />
        <div>&nbsp;</div>
        <textarea
          className="form-control"
          type="text"
          name="descp"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>&nbsp;</div>
        <input
          className="form-control"
          type="date"
          name="expiryDate"
          value={expiryDate}
          placeholder="Expiry Date"
          onChange={(e) => setExpirydate(e.target.value)}
        />
        <div>&nbsp;</div>
        <input
          type="submit"
          value="Add Offer"
          className="btn btn-secondary"
        />
      </form>
    </div>
  );
}

export default AddOffer;
