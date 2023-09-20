import React, { useState } from "react";
import Breadcrumbs from "./BreadCrumbs";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    let a, b, c, d;
    e.preventDefault();
    let alphaExp = /^[a-zA-Z\s]+$/;
    let numExp = /^[0-9]+$/;
    let emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;

    if (name === "") {
      document.getElementById("nameId").innerHTML = "Please enter Name";
      a =0;
    } else {
      if (name.match(alphaExp)) {
        document.getElementById("nameId").innerHTML = "";
        a =1
      } else {
        document.getElementById("nameId").innerHTML = "Please enter characters(a - z / A - Z)";
        a = 0;
      }
    }

    if (email === "") {
      document.getElementById("emailId").innerHTML = "Please enter Email";
      b = 0;
    } else {
      if (email.match(emailExp)) {
        document.getElementById("emailId").innerHTML = "";
        b = 1;
      } else {
        document.getElementById("emailId").innerHTML = "Please enter Email correctly";
        b = 0;
      }
    }

    if (phone === "") {
      document.getElementById("phoneId").innerHTML = "Please enter Phone Number";
      c = 0;
    } else {
      if (phone.match(numExp)) {
        document.getElementById("phoneId").innerHTML = "";
        c = 1;
      } else {
        document.getElementById("phoneId").innerHTML = "Please enter valid 10 digit number";
        c = 0;
      }
    }

    if (message === "") {
      document.getElementById("msgId").innerHTML = "Please enter Message";
      d = 0;
    }
    else{ 
      document.getElementById("msgId").innerHTML = "";
      d = 1;
    }

    if (a === 1 && b === 1 && c === 1 && d === 1) {
        console.log("Sent Success")
        setName("");
        setEmail("");
        setPhone("")
        setMessage("")
    }
  };
  return (
    <div className="body-container contact-container">
    {/* BreadCrumbs */}
    <div className="breadcrumb-block">
      <Breadcrumbs name="Contact" />
      {/* <h1>Contact Us</h1> */}
    </div>

    <div className="container">
      <form className="form-group" onSubmit={submitHandler}>
        <h4>Fill the form</h4>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Enter Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div id="nameId" className="errMsg"></div>
          </div>
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailId" className="errMsg"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div id="phoneId" className="errMsg"></div>
          </div>
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div id="msgId" className="errMsg"></div>
          </div>
          <div className="col-12">
            <input
              className="btn btn-success"
              type="submit"
              value="Send Message"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default ContactUs;
