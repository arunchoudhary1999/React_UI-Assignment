import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [roleKey, setRoleKey] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Sure You Are SuccessFully Submit This Form \n Name : ${name} \n Email : - ${email} \n User Name : - ${userName} \n Mobile Number : - ${mobile} \n Role : - ${roleKey} \n Password : - ${password}`
    );
    axios
      .post("https://63f74749833c7c9c60807b98.mockapi.io/crud", {
        e_name: name,
        e_email: email,
        e_userName: userName,
        e_mobile: mobile,
        e_roleKey: roleKey,
        e_password: password,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name : </label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Enter Email : </label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Enter User Name : </label>
              <input
                className="form-control"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Enter Mobile Number : </label>
              <input
                className="form-control"
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="User Mobile Number"
                required
              />
            </div>
            <div className="form-group">
            <label>Select Role : </label>
              <select
                className="form-control form-control"
                name="type_of_repairs"
                value={roleKey}
                onChange={(e) => setRoleKey(e.target.value)}
                required
                // onChange={(e) => onInputChange(e)}
              >
                <option value="select">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="form-group">
              <label>Enter Password : </label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="User Password"
                required
              />
            </div>
            <br />
            <div className="d-grid">
              <input className="btn btn-primary" type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
