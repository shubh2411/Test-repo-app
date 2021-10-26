import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Users
          </Link>
          <Link className="navbar-brand" to="/orders">
            Orders
          </Link>
          <Link className="navbar-brand" to="/reports">
            Reports
          </Link>
        </div>
      </nav>
        </div>
    )
}

export default Navbar
