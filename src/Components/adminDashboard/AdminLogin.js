import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        if (admin === "admin" && password === "admin") {
            navigate("/adminPanel")
        } else {
            alert("User Name or Password incorrect");
        }
    };

    return (
        <div className="admin-container" onSubmit={submitHandler}>
            <h1
                style={{
                    position: "relative",
                    width: "fit-content",
                    margin: "auto",
                    padding: "20px",
                    color: "#023b6d",
                }}
            >
                Home Services
            </h1>
            <h1
                style={{
                    position: "relative",
                    width: "fit-content",
                    margin: "auto",
                    marginTop: "20px",
                    padding: "20px",
                    color: "#023b6d",
                }}
            >
                Welcome to Admin
            </h1>
            <div className="login">
                <p>Login</p>
                <form className="login-form">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        value={admin}
                        onChange={(e) => {
                            setAdmin(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <input
                        className="btn btn-secondary"
                        type="submit"
                        value={"Login"}
                    />
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
