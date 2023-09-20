import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { ref, get, update } from "firebase/database";

const EditService = () => {
  const { serviceId } = useParams();

  const id = Number(serviceId) - 1;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qoute, setQoute] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    get(ref(db, "services/" + id))
      .then((snapShot) => {
        if (snapShot.exists()) {
          setName(snapShot.val().name);
          setDescription(snapShot.val().description);
          setQoute(snapShot.val().qoute);
        } else {
          console.log("snapshot is not available");
        }
      })
      .catch((err) => alert("Error", err.msg));
  }, []);

  const updateData = (e) => {
    e.preventDefault();

    update(ref(db, "services/" + id), {
      name,
      description,
      qoute,
    })
      .then(() => {
        alert("Data updated Successfully !");
        navigate("/adminPanel");
      })
      .catch((err) => alert("Error", err.msg));
  };

  return (
    <div className="col-12">
      <form onSubmit={updateData} className="add-form">
        <h3>Edit Data</h3>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>&nbsp;</div>
        <textarea
          className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>&nbsp;</div>
        <textarea
          className="form-control"
          type="text"
          value={qoute}
          onChange={(e) => setQoute(e.target.value)}
        />
        <div>&nbsp;</div>
        <input type="submit" value="Update" className="btn btn-secondary" />
      </form>
    </div>
  );
};

export default EditService;
