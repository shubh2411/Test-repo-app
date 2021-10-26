import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import Modal from "react-modal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const setData = (data) => {
    const { id } = data;
    localStorage.setItem("ID", id);
  };

  // Handle delete
  const [row, setRow] = useState("");

  // Modal functions -- OpenModel and CloseModal
  function openModal(e) {
    setIsOpen(true);
    setRow(e.target.id);
  }

  function closeModal(parm) {
    setIsOpen(false);
    if (parm === true) {
      const x = document.getElementById(row);
      const y = document
        .getElementById(row)
        .parentNode.parentNode.getAttribute("id");

      document.getElementById(y).style.backgroundColor = "red";
      let myobj = document.getElementById(x.getAttribute("id"));
      let update = document.getElementById(`update-${y}`);
      myobj.remove();
      update.remove();
    }
  }

  // Style for Modal display
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <div className="user-heading mt-5 mb-3">
        <h2>User List</h2>
        <Link to="/add">
          <button className="btn btn-primary">Add User +</button>
        </Link>

        {/* Search */}
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      {users
        .filter((user) => {
          if (searchTerm === "") {
            return "";
          } else if (
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return <div>{user}</div>;
          }
          return false;
        })
        .map((user, index) => {
          return (
            <div key={index}>
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">ID#</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">Department</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.company.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}

      {/* Display users data in table format */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID#</th>
            <th scope="col">FirstName</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr id={`row-${index + 1}`} key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                {/* Delete button */}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => openModal(e)}
                  id={`del-row-${index + 1}`}
                >
                  Delete
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  ariaHideApp={false}
                  contentLabel="Example Modal"
                >
                  <h2>Are you sure want to delete the User</h2>
                  <button
                    className="btn btn-warning"
                    onClick={() => closeModal(true)}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => closeModal(false)}
                  >
                    No
                  </button>
                </Modal>

                {/* Update button */}
                <Link to={`/update/${user.id}`}>
                  <button
                    className="btn btn-warning"
                    onClick={() => setData(user)}
                    id={`update-row-${index + 1}`}
                  >
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
