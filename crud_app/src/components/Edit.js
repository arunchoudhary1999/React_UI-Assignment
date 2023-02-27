import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [roleKey, setRoleKey] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // ab muze local storage se data get kerna h to iske liye hm getItem method ko use karegay, or set kerne ke liye setItem use ker rahe the
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setUserName(localStorage.getItem("userName"));
    setMobile(localStorage.getItem("mobile"));
    setRoleKey(localStorage.getItem("roleKey"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://63f74749833c7c9c60807b98.mockapi.io/crud/${id}`, {
        e_name: name,
        e_email: email,
        e_userName: userName,
        e_mobile: mobile,
        e_roleKey: roleKey,
        e_password: password,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
            <h1>Update Data</h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Enter Name : </label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Enter Email : </label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
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
              />
            </div>
            <div className="form-group">
            <label>Select Role : </label>
              <select
                className="form-control form-control"
                name="type_of_repairs"
                value={roleKey}
                onChange={(e) => setRoleKey(e.target.value)}
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
              />
            </div>
            <br />
            <div className="d-grid">
              <input className="btn btn-primary" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
