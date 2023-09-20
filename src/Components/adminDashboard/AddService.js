import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { ref, get, set, child, update } from 'firebase/database'


const AddService = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qoute, setQoute] = useState("");

  const navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();

    // Get Keys from db
    get((ref(db, 'keys/')))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const serviceKey = snapshot.val().serviceKey;
          const id = snapshot.val().serviceKey + 1;

          //   Add service data to db
          set(ref(db, 'services/' + serviceKey), {
            id, name, description, qoute
          })
          .then(()=> alert("Service Data added successfully!"))
          .catch(()=> alert("Error : Service Data Adding Failed"))
          //   Update service key value in keys from db
          update(ref(db, 'keys/'), {
            serviceKey: snapshot.val().serviceKey + 1,
          })
        }
        else {
          alert("Error : Service Data Adding Failed")
        }

      })
      .catch((err) => alert("Error : Service Data Adding Failed" + err.message))

  }

  
  return (
    <div className="col-12">
      <form onSubmit={postData} className='add-form'>
        <h3>Add Service Data</h3>
        <input
          className='form-control'
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
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
        <textarea
          className='form-control'
          type="text"
          name="descp"
          value={qoute}
          placeholder="Quote"
          onChange={(e) => setQoute(e.target.value)}
        />
        <div>&nbsp;</div>
        <input
          type="submit"
          value="Add Service"
          className="btn btn-secondary"
        />
      </form>
    </div>

  );
}

export default AddService;

