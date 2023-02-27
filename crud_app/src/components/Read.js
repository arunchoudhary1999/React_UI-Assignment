import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://63f74749833c7c9c60807b98.mockapi.io/crud")
      .then((response) => {
        // console.log(responnse.data);
        setApiData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://63f74749833c7c9c60807b98.mockapi.io/crud/${id}`)
    .then(() => {
        getData();
    })
  }

  const setDataToStorage = (id, name, email, userName, mobile, roleKey, password) => {
    // is chij ko muze local storage ke under storage kerwana h
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('userName', userName);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('roleKey', roleKey);
    localStorage.setItem('password', password);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-2 mt-2">
              <Link to='/create'>
                <button className="btn btn-primary">Create New Data</button>
              </Link>
            </div>
            <table className="table table-bordered table-striped table-dark table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Name</th>
                  <th>Mobile Number</th>
                  <th>Role</th>
                  <th>Password</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_email}</td>
                        <td>{item.e_userName}</td>
                        <td>{item.e_mobile}</td>
                        <td>{item.e_roleKey}</td>
                        <td>{item.e_password}</td>
                        <td>
                        <Link to='/edit'>
                          <button className="btn btn-primary" onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>
                        </Link>
                        </td>
                        <td>
                          <button className="btn btn-danger" onClick={() => {if(window.confirm('Are you sure delete this data ??')) { handleDelete(item.id) } }}>Delete</button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
