import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, mobile, department);
    
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        firstName,
        lastName,
        department,
        mobile,
        email,
      })
      .then((response) => response)
      .catch((err) => console.log(err));

      alert("User added  successfully");
      setFirstName("")
      setLastName("");
    setMobile("");
    setEmail("");
    setDepartment("");

  };
  return (
    <div className="container">
      Welcome to add users page
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={mobile}
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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

export default AddUser;
