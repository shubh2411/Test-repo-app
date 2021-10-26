import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        let value = response.data;
        setFirstName(value.name);
        setLastName(value.username);
        setMobile(value.phone);
        setEmail(value.email);
        setDepartment(value.company.name);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        firstName,
        lastName,
        department,
        mobile,
        email,
      })
      .then((response) => (response));
    alert("Data Updated successfully");
    setFirstName("");
    setLastName("");
    setMobile("");
    setEmail("");
    setDepartment("");
  };

  return (
    <div className="container">
      This is to update user info
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="form-control"
            id="firstName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            name="mobile"
            id="mobile"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dept" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
            name="dept"
            id="dept"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
